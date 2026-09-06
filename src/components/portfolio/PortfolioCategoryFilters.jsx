"use client";

import {
  Blocks,
  Bot,
  BriefcaseBusiness,
  LayoutGrid,
  Megaphone,
  Monitor,
  Smartphone,
} from "lucide-react";

import styles from "./Portfolio.module.css";

const ICONS = {
  all: LayoutGrid,
  web: Monitor,
  mobile: Smartphone,
  ecommerce: BriefcaseBusiness,
  ai: Bot,
  marketing: Megaphone,
  other: Blocks,
};

export default function PortfolioCategoryFilters({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className={styles.filtersWrap}>
      <div className={styles.filters} role="group" aria-label="Filter projects">
        {categories.map((category) => {
          const Icon = ICONS[category.icon] || Blocks;
          const active = category.id === activeCategory;

          return (
            <button
              key={category.id}
              type="button"
              className={`${styles.filter} ${active ? styles.active : ""}`}
              aria-pressed={active}
              onClick={() => onCategoryChange(category.id)}
            >
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />

              <span>{category.label}</span>

              <span className={styles.count}>{category.count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
