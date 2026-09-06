import CareersHero from "@/components/career/CareersHero";
import CareersValues from "@/components/career/CareerValues";
import CareersBenefits from "@/components/career/CareerBenefits";
import OpenRoles from "@/components/career/OpenRoles";
import HiringProcess from "@/components/career/HiringProcess";

import styles from "@/components/career/Careers.module.css";

export default function CareersPage({ roles = [] }) {
  return (
    <main className={styles.careersPage}>
      <CareersHero />

      <CareersValues />

      <CareersBenefits />

      <OpenRoles roles={roles} />

      <HiringProcess />
    </main>
  );
}
