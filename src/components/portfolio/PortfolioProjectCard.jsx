import Image from "next/image";
import styles from "./Portfolio.module.css";

const LightningIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13.4 2 5.8 13h5.3l-.5 9L18.2 11h-5.3l.5-9Z" />
  </svg>
);

export default function PortfolioProjectCard({
  title,
  description,
  image,
  imageAlt = "",
  tags = [],
  outcome,
  priority = false,
}) {
  return (
    <article className={styles.projectCard}>
      <div className={styles.projectVisual}>
        <Image
          className={styles.projectImage}
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </div>

      <div className={styles.projectContent}>
        <div>
          <h3 className={styles.projectTitle}>{title}</h3>

          <p className={styles.projectDescription}>{description}</p>

          <ul className={styles.projectTags} aria-label="Project categories">
            {tags.map((tag) => (
              <li className={styles.projectTag} key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.projectFooter}>
          <p className={styles.projectOutcome}>
            <span className={styles.outcomeIcon}>
              <LightningIcon />
            </span>

            {outcome}
          </p>
        </div>
      </div>
    </article>
  );
}
