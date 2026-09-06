import { BookOpen, CalendarDays, Laptop, Sparkles, Users, Zap } from "lucide-react";

import styles from "./Careers.module.css";

const benefits = [
  {
    title: "Flexible work",
    description:
      "Work in a way that supports your responsibilities and helps you perform at your best.",
    icon: Laptop,
  },
  {
    title: "Learning budget",
    description:
      "Invest in relevant courses, certifications and resources that support your growth.",
    icon: BookOpen,
  },
  {
    title: "Meaningful ownership",
    description:
      "Take responsibility for important work and see the direct impact of your decisions.",
    icon: Zap,
  },
  {
    title: "Paid time off",
    description: "Take time to rest, recharge and return with renewed focus.",
    icon: CalendarDays,
  },
  {
    title: "Modern tools",
    description: "Use dependable tools and technology that help you deliver your best work.",
    icon: Sparkles,
  },
  {
    title: "Supportive team",
    description:
      "Work alongside thoughtful people who communicate openly and help each other succeed.",
    icon: Users,
  },
];

export default function CareersBenefits() {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <div className={styles.benefitsLayout}>
          <div>
            <p className={styles.benefitsEyebrow}>BENEFITS</p>

            <h2 className={styles.benefitsTitle}>Your best work needs the right environment.</h2>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className={styles.benefitCard} key={benefit.title}>
                  <span className={styles.benefitIcon}>
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>

                    <p className={styles.benefitText}>{benefit.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
