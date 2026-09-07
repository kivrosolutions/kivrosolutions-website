import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Layers3, Lightbulb, Target } from "lucide-react";
import styles from "./CaseStudy.module.css";

export default function CaseStudyLayout({ project, nextProject }) {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="case-study-title">
        <div className={styles.container}>
          <Link className={styles.backLink} href="/portfolio">
            <ArrowLeft size={17} aria-hidden="true" />
            Back to all projects
          </Link>

          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>CASE STUDY</p>
              <h1 id="case-study-title" className={styles.title}>{project.title}</h1>
              <p className={styles.summary}>{project.summary}</p>
              <ul className={styles.tags} aria-label="Project categories">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>

            <dl className={styles.projectMeta}>
              <div><dt>Client</dt><dd>{project.client}</dd></div>
              <div><dt>Industry</dt><dd>{project.industry}</dd></div>
              <div><dt>Timeline</dt><dd>{project.timeline}</dd></div>
              <div><dt>Year</dt><dd>{project.year}</dd></div>
            </dl>
          </div>

          <div className={styles.heroVisual}>
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
          </div>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>PROJECT OVERVIEW</p>
            <h2>From a complex challenge to a focused digital product.</h2>
          </div>

          <div className={styles.storyGrid}>
            <article className={styles.storyCard}>
              <span className={styles.iconBox}><Target size={22} aria-hidden="true" /></span>
              <p className={styles.cardNumber}>01</p>
              <h3>The challenge</h3>
              <p>{project.challenge}</p>
            </article>

            <article className={styles.storyCard}>
              <span className={styles.iconBox}><Lightbulb size={22} aria-hidden="true" /></span>
              <p className={styles.cardNumber}>02</p>
              <h3>Our solution</h3>
              <p>{project.solution}</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <div className={styles.detailsGrid}>
            <div>
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>WHAT WE DELIVERED</p>
                <h2>A practical solution built around real workflows.</h2>
              </div>
              <ul className={styles.featureList}>
                {project.features.map((feature) => (
                  <li key={feature}>
                    <span><Check size={16} aria-hidden="true" /></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <aside className={styles.servicesCard}>
              <span className={styles.iconBox}><Layers3 size={22} aria-hidden="true" /></span>
              <h3>Services provided</h3>
              <ul>{project.services.map((service) => <li key={service}>{service}</li>)}</ul>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.resultsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.lightEyebrow}>PROJECT OUTCOME</p>
            <h2 className={styles.lightTitle}>{project.outcome}</h2>
          </div>
          <dl className={styles.resultsGrid}>
            {project.results.map((result) => (
              <div key={result.label}>
                <dd>{result.value}</dd>
                <dt>{result.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.nextSection}>
        <div className={styles.container}>
          <div className={styles.nextCard}>
            <div>
              <p className={styles.eyebrow}>NEXT CASE STUDY</p>
              <h2>{nextProject.title}</h2>
              <p>{nextProject.description}</p>
            </div>
            <Link href={"/portfolio/" + nextProject.slug} className={styles.nextLink}>
              View project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
