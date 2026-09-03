import { MessageCircle } from "lucide-react";
import JoinTeamCTA from "@/components/aboutpage/JoinTeamCTA";

export const metadata = {
  title: "About Us - Kivro Solution",
  description:
    "Learn about our team, mission, and how we help businesses ship innovative software.",
};

export default function AboutPage() {
  return (
    <>
      <JoinTeamCTA />
      <JoinTeamCTA
        title="Let's Talk"
        description="Curious what an AI employee could take off your team's plate? We'll show you live."
        ctaLabel="Contact Us"
        icon={MessageCircle}
      />
    </>
  );
}
