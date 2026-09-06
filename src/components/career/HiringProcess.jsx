import Link from "next/link";
import { ArrowRight } from "lucide-react";

import styles from "./Careers.module.css";

const hiringSteps = [
  {
    number: "01",
    title: "Apply",
    description: "Tell us about yourself, your experience and the work you are proud of.",
  },
  {
    number: "02",
    title: "Intro call",
    description: "A friendly conversation to learn about you and answer your questions.",
  },
  {
    number: "03",
    title: "Skills conversation",
    description: "Talk through your experience, approach and relevant technical skills.",
  },
  {
    number: "04",
    title: "Offer",
    description: "If it is a strong mutual fit, we will discuss the offer and next steps.",
  },
];

export default function HiringProcess() {
  return (
    <section className={styles.processSection} aria-labelledby="hiring-process-heading">
      <div className={styles.container}>
        <div className={styles.processHeader}>
          <p className={styles.eyebrow}>OUR HIRING PROCESS</p>

          <h2 id="hiring-process-heading" className={styles.sectionTitle}>
            A simple, people-first process
          </h2>
        </div>

        <div className={styles.processGrid}>
          {hiringSteps.map((step) => (
            <article className={styles.processStep} key={step.number}>
              <span className={styles.stepNumber}>{step.number}</span>

              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>

                <p className={styles.stepText}>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.applicationCta}>
          <h2 className={styles.applicationTitle}>Don&apos;t see the right role?</h2>

          <span className={styles.applicationDivider} aria-hidden="true" />

          <p className={styles.applicationText}>
            We&apos;re always interested in meeting talented people. Send us your profile and
            we&apos;ll keep you in mind for future opportunities.
          </p>

          <Link
            href={{
              pathname: "/contact",
              query: {
                subject: "general-career-application",
              },
            }}
            className={styles.applicationButton}
          >
            Send your profile
            <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
