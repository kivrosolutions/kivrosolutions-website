"use client";

import { useMemo, useState } from "react";
import { ESTIMATOR_COPY, FEATURE_GROUPS, PLATFORMS } from "@/lib/estimatorData";
import { buildBriefMailto, calcTimeline, calcTotal, getAllItems } from "@/lib/estimator";
import FeatureAccordion from "./FeatureAccordion";
import EstimateSummary from "./EstimateSummary";
import HourlyRateCard from "./HourlyRateCard";

export default function CostEstimator({ groups = FEATURE_GROUPS, copy = ESTIMATOR_COPY }) {
  const [selected, setSelected] = useState(() => new Set());
  const [openId, setOpenId] = useState(null);
  const [platform, setPlatform] = useState("both");

  const toggle = (id) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const selectedItems = useMemo(
    () => getAllItems(groups).filter((i) => selected.has(i.id)),
    [selected, groups]
  );
  const multiplier = PLATFORMS.find((p) => p.id === platform)?.multiplier ?? 1;
  const total = useMemo(() => calcTotal(selectedItems, multiplier), [selectedItems, multiplier]);
  const timeline = calcTimeline(selectedItems.length);
  const mailtoHref = useMemo(
    () =>
      buildBriefMailto({
        email: copy.email,
        items: selectedItems,
        platform,
        total,
      }),
    [selectedItems, platform, total, copy.email]
  );

  return (
    <section id="cost-estimator" className="bg-[#0b0b0d] px-4 py-14 sm:px-6 sm:py-16">
      <div className="container-custom-lg">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {copy.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center leading-relaxed text-zinc-400">
          {copy.sub}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Left + Mid card */}
          <div className="grid overflow-hidden rounded-3xl border border-zinc-800 bg-[#141416] md:grid-cols-2">
            <div className="p-5 sm:p-6 md:border-r md:border-zinc-800">
              <FeatureAccordion
                groups={groups}
                selected={selected}
                onToggle={toggle}
                openId={openId}
                onOpen={(id) => setOpenId(openId === id ? null : id)}
                count={selected.size}
              />
            </div>
            <div className="p-5 sm:p-6">
              <EstimateSummary
                platform={platform}
                onPlatform={setPlatform}
                selectedItems={selectedItems}
                total={total}
                timeline={timeline}
                mailtoHref={mailtoHref}
              />
            </div>
          </div>

          {/* Right static card */}
          <HourlyRateCard />
        </div>
      </div>
    </section>
  );
}
