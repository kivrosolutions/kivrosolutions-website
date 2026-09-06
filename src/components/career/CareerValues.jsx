import { Heart, Lightbulb, Target, Users } from "lucide-react";

import styles from "./Careers.module.css";

const values = [
  {
    title: "Own the outcome",
    description:
      "We take responsibility, communicate clearly and focus on work that creates real impact.",
    icon: Target,
  },
  {
    title: "Stay curious",
    description:
      "We keep learning, question assumptions and explore better ways to solve problems.",
    icon: Lightbulb,
  },
  {
    title: "Build together",
    description: "We collaborate openly, share knowledge and help each other produce better work.",
    icon: Users,
  },
  {
    title: "Keep it human",
    description: "We treat clients and teammates with respect, empathy and genuine care.",
    icon: Heart,
  },
];

export default function CareersValues() {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <div className={styles.valuesHeader}>
          <div>
            <p className={styles.eyebrow}>OUR VALUES</p>

            <h2 className={styles.sectionTitle}>How we work</h2>
          </div>

          <p className={styles.valuesDescription}>
            Our values guide how we solve problems, support one another and deliver dependable work
            for our clients.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article className={styles.valueCard} key={value.title}>
                <span className={styles.valueIcon}>
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                </span>

                <h3 className={styles.valueTitle}>{value.title}</h3>

                <p className={styles.valueText}>{value.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
