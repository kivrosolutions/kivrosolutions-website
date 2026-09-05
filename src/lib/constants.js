export const COMPANY_NAME = "Kivro Solution";

export const SERVICES = ["Web Development", "Mobile Apps", "UI/UX Design", "Cloud Solutions"];

export const SOCIAL_LINKS = {
  twitter: "#",
  linkedin: "#",
  github: "#",
};

export const megaMenus = {
  services: {
    columns: [
      {
        title: "DESIGN & BUILD",
        items: [
          {
            icon: "pencil",
            title: "UI/UX Design",
            description: "Intuitive interfaces that delight users.",
            href: "/services/ux-ui",
            badgeColor: "orange",
          },
          {
            icon: "monitor",
            title: "Web App Development",
            description: "Dynamic, scalable web solutions for growth.",
            href: "/services/web",
            badgeColor: "orange",
          },
          {
            icon: "phone",
            title: "Mobile App Development",
            description: "High-performance apps built for scale.",
            href: "/services/mobile",
            badgeColor: "orange",
          },
          {
            icon: "code",
            title: "No/Low Code Development",
            description: "Rapid prototyping and deployment without heavy code.",
            href: "/services/nolow-code",
            badgeColor: "orange",
          },
        ],
      },
      {
        title: "INTELLIGENCE",
        items: [
          {
            icon: "cpu",
            title: "AI Automation",
            description: "Automate workflows with intelligent AI systems.",
            href: "/services/ai-automation",
            badgeColor: "green",
          },
          {
            icon: "code",
            title: "AI-Native Development",
            description: "Smarter, faster, more responsive AI.",
            href: "/services/ai-native",
            badgeColor: "green",
          },
          {
            icon: "bot",
            title: "AI Chatbots/Agents",
            description: "Agents that automate tasks and coordinate workflows.",
            href: "/services/ai-agents",
            badgeColor: "green",
          },
          {
            icon: "search",
            title: "AI Audit",
            description: "Evaluate your data and systems for AI adoption.",
            href: "/services/ai-audit",
            badgeColor: "green",
          },
        ],
      },
      {
        title: "GROW",
        items: [
          {
            icon: "trending-up",
            title: "Growth Strategy",
            description: "Turn MVPs into market leaders with data-driven growth.",
            href: "/services/growth",
            badgeColor: "blue",
          },
          {
            icon: "speaker",
            title: "Digital Marketing",
            description: "Targeted campaigns for installs, engagement, retention.",
            href: "/services/marketing",
            badgeColor: "blue",
          },
          {
            icon: "speaker",
            title: "App/Website Marketing",
            description: "Full-funnel marketing for apps and websites.",
            href: "/services/app-marketing",
            badgeColor: "blue",
          },
        ],
      },
    ],
    cta: {
      label: "EBOOK",
      heading: "Navigating App Development",
      subtext: "Key factors that shape your timeline — and the 5 mistakes to avoid.",
      buttonText: "Download free",
      href: "/resources/app-dev-ebook",
    },
  },
  about: {
    columns: [
      {
        title: "HOW WE WORK",
        items: [
          {
            icon: "compass",
            title: "Philosophy",
            description: "The principles behind every engagement.",
            href: "/about/philosophy",
            badgeColor: "orange",
          },
          {
            icon: "refresh-cw",
            title: "Cadence",
            description: "How a sprint actually runs.",
            href: "/about/cadence",
            badgeColor: "orange",
          },
          {
            icon: "users",
            title: "Team Model",
            description: "Senior team from day one. No BDRs, no juniors.",
            href: "/about/team",
            badgeColor: "orange",
          },
        ],
      },
      {
        title: "PROCESS",
        items: [
          {
            icon: "shield",
            title: "Quality Framework",
            description: "How we make production-grade software, repeatably.",
            href: "/about/quality",
            badgeColor: "green",
          },
          {
            icon: "link",
            title: "Client Journey",
            description: "Four personas. Eleven paths in. Pick the door that fits.",
            href: "/about/journey",
            badgeColor: "green",
          },
        ],
        viewAll: {
          label: "All How We Work →",
          href: "/about",
          color: "#0137a2",
        },
      },
      {
        title: "MORE",
        items: [
          {
            icon: "info",
            title: "About Us",
            description: "Boston AI studio since 2008. $1B+ raised by clients.",
            href: "/about",
            badgeColor: "blue",
          },
          {
            icon: "flag",
            title: "Start Here",
            description: "60-second Service-Fit quiz. One tailored next step.",
            href: "/start",
            badgeColor: "blue",
          },
          {
            icon: "mail",
            title: "Contact",
            description: "Tell us about your project. A founder reads every message.",
            href: "/contact",
            badgeColor: "blue",
          },
        ],
      },
    ],
    cta: {
      label: "APPROACH",
      heading: "The best products aren't built overnight. They're grown.",
      subtext: "Data-driven sprints. Senior team from day one.",
      buttonText: "Read the approach",
      href: "/about/approach",
    },
  },
};
