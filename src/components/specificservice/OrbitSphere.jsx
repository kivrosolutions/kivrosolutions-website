"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const DEFAULT_ITEMS = [
  "AMAZON ADS", "META", "GOOGLE", "TIKTOK", "LINKEDIN", "YOUTUBE",
  "INSTAGRAM", "CRM", "EMAIL", "SEO", "APPS", "WEBSITES",
];

/* Empty sides ko fill karne wale floating chips */
const DEFAULT_SATELLITES = [
  { side: "left", top: "14%", value: "+3.2x", label: "Avg. ROAS" },
  { side: "left", top: "60%", value: "-40%", label: "Acquisition cost" },
  { side: "right", top: "22%", value: "24/7", label: "Automation" },
  { side: "right", top: "68%", value: "12+", label: "Channels unified" },
];

export default function OrbitSphere({
  items = DEFAULT_ITEMS,
  satellites = DEFAULT_SATELLITES,
  color = "#0137a2",
  speed = 0.00018,
  className = "",
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf, w, h;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const hex = color.replace("#", "");
    const rgb = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
    const rgba = (a) => `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${a})`;

    const GA = Math.PI * (3 - Math.sqrt(5));
    const pts = [];
    for (let i = 0; i < 320; i++) {
      const y = 1 - (2 * (i + 0.5)) / 320;
      const r = Math.sqrt(1 - y * y);
      const t = i * GA;
      pts.push([r * Math.cos(t), y, r * Math.sin(t)]);
    }

    const ringDots = (tiltX, tiltZ, count = 130) => {
      const arr = [];
      for (let j = 0; j < count; j++) {
        const a = (j / count) * Math.PI * 2;
        const x = Math.cos(a);
        const z = Math.sin(a);
        const y1 = -z * Math.sin(tiltX);
        const z1 = z * Math.cos(tiltX);
        const x2 = x * Math.cos(tiltZ) - y1 * Math.sin(tiltZ);
        const y2 = x * Math.sin(tiltZ) + y1 * Math.cos(tiltZ);
        arr.push([x2, y2, z1]);
      }
      return arr;
    };
    const rings = [ringDots(1.1, 0.4), ringDots(-0.5, -0.7)];

    const anchors = items.map((_, i) => {
      const y = 1 - (2 * (i + 0.5)) / items.length;
      const r = Math.sqrt(1 - y * y);
      const t = i * GA * 2;
      return [r * Math.cos(t) * 1.05, y * 1.05, r * Math.sin(t) * 1.05];
    });

    const TILT = 0.35;
    function project(p, angle, R) {
      const cosA = Math.cos(angle), sinA = Math.sin(angle);
      const x = p[0] * cosA - p[2] * sinA;
      const z = p[0] * sinA + p[2] * cosA;
      const cosT = Math.cos(TILT), sinT = Math.sin(TILT);
      const y = p[1] * cosT - z * sinT;
      const z2 = p[1] * sinT + z * cosT;
      const s = 2.4 / (2.4 + z2);
      return { x: w / 2 + x * R * s, y: h / 2 + y * R * s, z: z2 };
    }

    function draw(t) {
      const angle = t * speed;
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * 0.42;

      for (const p of pts) {
        const q = project(p, angle, R);
        const depth = (1 - q.z) / 2;
        ctx.fillStyle = rgba(0.1 + 0.45 * depth);
        ctx.beginPath();
        ctx.arc(q.x, q.y, 0.7 + depth * 1.3, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const ring of rings) {
        for (const p of ring) {
          const q = project(p, angle, R);
          const depth = (1 - q.z) / 2;
          ctx.fillStyle = rgba(0.12 + 0.5 * depth);
          ctx.beginPath();
          ctx.arc(q.x, q.y, 0.5 + depth * 0.9, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const labels = items
        .map((text, i) => ({ text, q: project(anchors[i], angle, R) }))
        .sort((a, b) => b.q.z - a.q.z);

      for (const l of labels) {
        const depth = (1 - l.q.z) / 2;
        const size = 10 + 20 * Math.pow(depth, 1.6);
        ctx.font = `600 ${size}px ui-sans-serif, system-ui, -apple-system, sans-serif`;
        ctx.letterSpacing = `${size * 0.08}px`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = rgba(0.16 + 0.84 * depth);
        ctx.fillText(l.text.toUpperCase(), l.q.x, l.q.y);
      }
    }

    const resize = () => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw(4000);
    };

    const loop = (t) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (wrapRef.current) ro.observe(wrapRef.current);
    if (!reduce) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [items, color, speed]);

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {/* Side glows — empty edges ko soft fill */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full blur-3xl md:block"
        style={{ background: `${color}14` }}
      />
      <div
        className="pointer-events-none absolute right-0 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full blur-3xl md:block"
        style={{ background: `${color}14` }}
      />

      {/* Sphere canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      {/* Floating stat chips — left/right sides */}
      {satellites.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, x: s.side === "left" ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.15, ease: "easeOut" }}
          className={`pointer-events-none absolute z-10 hidden md:block ${s.side === "left" ? "left-0" : "right-0"}`}
          style={{ top: s.top }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
            className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.18)]"
          >
            <p className="text-lg font-bold" style={{ color }}>{s.value}</p>
            <p className="mt-0.5 text-xs text-zinc-500">{s.label}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}