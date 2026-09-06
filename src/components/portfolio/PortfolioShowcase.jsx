"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import PortfolioCategoryFilters from "./PortfolioCategoryFilters";
import PortfolioProjectCard from "./PortfolioProjectCard";
import styles from "./Portfolio.module.css";

const getProjectSlug = (project) =>
  project.slug ||
  project.title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function PortfolioShowcase({ projects = [] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = useMemo(() => {
    const definitions = [
      {
        id: "all",
        label: "All",
        icon: "all",
      },
      {
        id: "web",
        label: "Web",
        icon: "web",
      },
      {
        id: "mobile",
        label: "Mobile",
        icon: "mobile",
      },
      {
        id: "ecommerce",
        label: "E-commerce",
        icon: "ecommerce",
      },
      {
        id: "ai",
        label: "AI & Automation",
        icon: "ai",
      },
      {
        id: "marketing",
        label: "Marketing",
        icon: "marketing",
      },
    ];

    return definitions
      .map((category) => {
        const count =
          category.id === "all"
            ? projects.length
            : projects.filter((project) => project.categories?.includes(category.id)).length;

        return {
          ...category,
          count,
        };
      })
      .filter((category) => category.id === "all" || category.count > 0);
  }, [projects]);

  const visibleProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) => project.categories?.includes(activeCategory));
  }, [activeCategory, projects]);

  return (
    <main className={styles.portfolioPage}>
      {/* Hero */}
      <section className={styles.hero} aria-labelledby="portfolio-heading">
        <div className={styles.container}>
          <p className={styles.eyebrow}>OUR WORK</p>

          <h1 id="portfolio-heading" className={styles.heroTitle}>
            Projects built to move
            <br />
            businesses forward.
          </h1>

          <p className={styles.intro}>
            Explore selected web, mobile, e-commerce, AI and marketing projects.
          </p>

          <div className={styles.filtersPosition}>
            <PortfolioCategoryFilters
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className={styles.projectsSection} aria-labelledby="projects-heading">
        <div className={styles.container}>
          <h2 id="projects-heading" className={styles.srOnly}>
            Portfolio projects
          </h2>

          {visibleProjects.length > 0 ? (
            <div className={styles.projectsGrid}>
              {visibleProjects.map((project, index) => {
                const slug = getProjectSlug(project);

                return (
                  <div className={styles.projectGridItem} key={slug}>
                    <PortfolioProjectCard
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      imageAlt={project.imageAlt}
                      tags={project.tags}
                      outcome={project.outcome}
                      priority={index < 2 && activeCategory === "all"}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3 className={styles.emptyStateTitle}>No projects found</h3>

              <p className={styles.emptyStateText}>
                There are currently no projects available in this category.
              </p>

              <button
                className={styles.emptyStateButton}
                type="button"
                onClick={() => setActiveCategory("all")}
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div>
              <p className={styles.ctaLabel}>LET&apos;S BUILD TOGETHER</p>

              <h2 className={styles.ctaTitle}>Have a project in mind?</h2>
            </div>

            <p className={styles.ctaCopy}>
              We help ambitious businesses turn ideas into high-impact digital products.
            </p>

            <Link href="/contact" className={styles.ctaButton}>
              <span>Start a Conversation</span>

              <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
