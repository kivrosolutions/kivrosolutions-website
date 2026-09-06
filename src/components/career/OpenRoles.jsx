"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, MapPin } from "lucide-react";

import styles from "./Careers.module.css";

const categories = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "engineering",
    label: "Engineering",
  },
  {
    id: "design",
    label: "Design",
  },
  {
    id: "marketing",
    label: "Marketing",
  },
];

const getRoleSlug = (role) =>
  role.slug ||
  role.title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function OpenRoles({ roles = [] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filters = useMemo(() => {
    return categories
      .map((category) => {
        const count =
          category.id === "all"
            ? roles.length
            : roles.filter((role) => role.category === category.id).length;

        return {
          ...category,
          count,
        };
      })
      .filter((category) => category.id === "all" || category.count > 0);
  }, [roles]);

  const visibleRoles = useMemo(() => {
    if (activeCategory === "all") {
      return roles;
    }

    return roles.filter((role) => role.category === activeCategory);
  }, [activeCategory, roles]);

  return (
    <section className={styles.rolesSection} id="open-roles" aria-labelledby="open-roles-heading">
      <div className={styles.container}>
        <div className={styles.rolesHeader}>
          <div>
            <p className={styles.eyebrow}>OPEN ROLES</p>

            <h2 id="open-roles-heading" className={styles.sectionTitle}>
              Find your place at Kivro
            </h2>
          </div>

          <div className={styles.roleFilters} role="group" aria-label="Filter open roles">
            {filters.map((filter) => {
              const active = filter.id === activeCategory;

              return (
                <button
                  key={filter.id}
                  type="button"
                  className={`${styles.roleFilter} ${active ? styles.activeFilter : ""}`}
                  aria-pressed={active}
                  onClick={() => setActiveCategory(filter.id)}
                >
                  <span>{filter.label}</span>

                  <span className={styles.filterCount}>{filter.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.rolesGrid} aria-live="polite">
          {visibleRoles.length > 0 ? (
            visibleRoles.map((role) => {
              const slug = getRoleSlug(role);

              return (
                <Link
                  key={slug}
                  href={{
                    pathname: "/contact",
                    query: {
                      subject: "career",
                      role: slug,
                    },
                  }}
                  className={styles.roleCard}
                  aria-label={`Apply for ${role.title}`}
                >
                  <div>
                    <h3 className={styles.roleTitle}>{role.title}</h3>

                    <p className={styles.roleDepartment}>{role.department}</p>
                  </div>

                  <span className={styles.roleMeta}>
                    <MapPin size={16} strokeWidth={1.8} aria-hidden="true" />

                    {role.location}
                  </span>

                  <span className={styles.roleMeta}>
                    <BriefcaseBusiness size={16} strokeWidth={1.8} aria-hidden="true" />

                    {role.type}
                  </span>

                  <span className={styles.roleArrow}>
                    <ArrowRight size={19} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                </Link>
              );
            })
          ) : (
            <div className={styles.emptyRoles}>
              No open positions are currently available in this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
