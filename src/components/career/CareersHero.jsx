import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import styles from "./Careers.module.css";

const teamImages = [
  {
    src: "/images/careers/team-collaboration-1.jpeg",
    alt: "Kivro Solutions team members collaborating",
  },
  {
    src: "/images/careers/team-collaboration-2.jpeg",
    alt: "Software team discussing a digital product",
  },
  {
    src: "/images/careers/team-collaboration-3.jpeg",
    alt: "Kivro Solutions team working together",
  },
];

export default function CareersHero() {
  return (
    <section className={styles.hero} aria-labelledby="careers-heading">
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>CAREERS AT KIVRO</p>

            <h1 id="careers-heading" className={styles.heroTitle}>
              Do meaningful work.
              <br />
              Grow with us.
            </h1>

            <p className={styles.heroDescription}>
              Join a team turning ambitious ideas into useful digital products. Bring your
              curiosity, take ownership and grow alongside people who care about doing great work.
            </p>

            <div className={styles.heroActions}>
              <Link href="#open-roles" className={styles.primaryButton}>
                View open roles
                <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
              </Link>

              <Link href="#life-at-kivro" className={styles.secondaryButton}>
                Life at Kivro
                <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div
            className={styles.teamGallery}
            id="life-at-kivro"
            aria-label="Life at Kivro Solutions"
          >
            {teamImages.map((image, index) => (
              <div className={styles.teamImage} key={image.src}>
                <Image
                  className={styles.galleryImage}
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="
                    (max-width: 560px) 100vw,
                    (max-width: 950px) 33vw,
                    22vw
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
