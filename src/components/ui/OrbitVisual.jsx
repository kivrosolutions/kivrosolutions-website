"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Database,
  Globe,
  Archive,
  LineChart,
  BarChart3,
  Hash,
  Share2,
  Cloud,
  Palette,
  PenTool,
  Code,
  Mail,
  Bell,
} from "lucide-react";

const SOURCES = [
  { label: "Application", Icon: FileText, x: 18, y: 8 },
  { label: "Database", Icon: Database, x: 70, y: 6 },
  { label: "Website", Icon: Globe, x: 36, y: 18 },
  { label: "Warehouse", Icon: Archive, x: 84, y: 16 },
];

const TOOLS = [
  { Icon: LineChart, color: "#6366f1", x: 15, y: 76 },
  { Icon: BarChart3, color: "#f59e0b", x: 27, y: 76 },
  { Icon: Hash, color: "#e11d48", x: 39, y: 76 },
  { Icon: Share2, color: "#0137a2", x: 51, y: 76 },
  { Icon: Cloud, color: "#0ea5e9", x: 63, y: 76 },
  { Icon: Palette, color: "#9333ea", x: 75, y: 76 },
  { Icon: PenTool, color: "#f97316", x: 87, y: 76 },
  { Icon: Code, color: "#111827", x: 21, y: 89 },
  { Icon: Mail, color: "#dc2626", x: 33, y: 89 },
  { Icon: Bell, color: "#7c3aed", x: 45, y: 89 },
  { Icon: Globe, color: "#0891b2", x: 57, y: 89 },
  { Icon: Database, color: "#15803d", x: 69, y: 89 },
  { Icon: LineChart, color: "#c2410c", x: 81, y: 89 },
];

const C = 300; // svg center

export default function OrbitVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto aspect-square w-full max-w-[400px]"
    >
      {/* Concentric rings */}
      <div className="absolute inset-0 rounded-full bg-[#0137a2]/10" />
      <div className="absolute inset-0 m-auto h-[78%] w-[78%] rounded-full bg-[#0137a2]/15" />
      <div className="absolute inset-0 m-auto h-[56%] w-[56%] rounded-full bg-[#0137a2]/25" />
      <div className="absolute inset-0 m-auto h-[36%] w-[36%] rounded-full bg-[#04265f]" />

      {/* Connection lines + flowing data */}
      <svg viewBox="0 0 600 600" fill="none" className="absolute inset-0 h-full w-full">
        {SOURCES.map((s, i) => {
          const x = s.x * 6;
          const y = s.y * 6 + 30;
          const d = `M ${x} ${y} C ${x} ${y + 90}, ${C} ${y + 95}, ${C} 286`;
          return (
            <g key={s.label}>
              <path d={d} stroke="#0137a2" strokeOpacity="0.22" strokeWidth="1" />
              <motion.path
                d={d}
                stroke="#0137a2"
                strokeWidth="1.2"
                strokeDasharray="3 11"
                animate={{ strokeDashoffset: [0, -112] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
              />
            </g>
          );
        })}
        {TOOLS.map((t, i) => {
          const x = t.x * 6;
          const y = t.y * 6;
          const d = `M ${C} 316 C ${C} ${y - 95}, ${x} ${y - 85}, ${x} ${y - 16}`;
          return (
            <g key={i}>
              <path d={d} stroke="#0137a2" strokeOpacity="0.18" strokeWidth="0.9" />
              <motion.path
                d={d}
                stroke="#0137a2"
                strokeWidth="1.1"
                strokeDasharray="3 11"
                animate={{ strokeDashoffset: [0, -112] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.25 }}
              />
            </g>
          );
        })}
      </svg>

      {/* Center hub + pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.span
          className="absolute inset-0 rounded-full border border-[#0137a2]"
          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#0137a2]/70 bg-gradient-to-b from-[#0137a2] to-[#04265f] shadow-[0_0_25px_rgba(1,55,162,0.55)]">
          <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c1 5 4 8 9 10-5 2-8 5-9 10-1-5-4-8-9-10 5-2 8-5 9-10z" />
          </svg>
        </div>
      </div>

      {/* Floating source chips */}
      {SOURCES.map((s, i) => (
        <div
          key={s.label}
          className="absolute -translate-x-1/2"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            className="flex items-center gap-1.5 rounded-md border border-[#0137a2]/20 bg-white px-2.5 py-1.5 shadow-sm"
          >
            <s.Icon className="h-3 w-3 text-[#0137a2]" />
            <span className="text-[10px] font-semibold text-zinc-800 sm:text-[11px]">
              {s.label}
            </span>
          </motion.div>
        </div>
      ))}

      {/* Floating tool tiles */}
      {TOOLS.map((t, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${t.x}%`, top: `${t.y}%` }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 bg-white shadow-md sm:h-8 sm:w-8"
          >
            <t.Icon className="h-3 w-3" style={{ color: t.color }} />
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
