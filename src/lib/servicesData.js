export const services = [
  {
    slug: "ux-ui",
    title: "UX / UI Design",
    category: "DESIGN & BUILD",
    badgeColor: "orange",
    icon: "pencil",
    description: "Intuitive interfaces that delight users.",
    longDescription:
      "We design user experiences that feel natural and look stunning. From research to high-fidelity prototypes, every pixel is intentional.",
    heroImage: "/images/services/ux-ui.jpg",
    serviceHero: {
      theme: "blue",
      badge: "Service · UX / UI Design",
      title: "Design that makes the product obvious.",
      accentTitle: "Beautiful is the easy part.",
      description:
        "Research-led product design — interfaces that earn trust and turn interest into action.",
      primaryCta: { label: "See how we design", href: "/portfolio" },
      secondaryCta: { label: "Talk to a designer", href: "/contact" },
    },
    statCards: [
      {
        accent: "blue",
        value: "200+",
        label: "Interfaces Designed",
        icon: "layout",
      },
      {
        accent: "green",
        value: "98%",
        label: "Client Satisfaction",
        icon: "smile",
      },
      {
        accent: "orange",
        value: "12+",
        label: "Years of Experience",
        icon: "award",
      },
    ],
    featureSection: {
      label: "SERVICES",
      heading: "A service for every",
      headingAccent: "design problem.",
      description:
        "Engage us for one focused deliverable or the whole arc — each stands on its own, and each feeds the next.",
      cards: [
        {
          accent: "orange",
          title: "UX Audit",
          description:
            "A heuristic review of your live product, with every friction point found and prioritized.",
          icon: "search",
        },
        {
          accent: "green",
          title: "A/B Testing",
          description:
            "Put design decisions in front of real users and let the data settle the debate.",
          icon: "layout",
        },
        {
          accent: "blue",
          title: "Usability Testing",
          description:
            "Watch real people use the product, then fix exactly what trips them up.",
          icon: "eye",
        },
        {
          accent: "purple",
          title: "Wireframing & Prototyping",
          description:
            "Low-fidelity layouts and interactive prototypes that validate ideas before a single line of code.",
          icon: "pencil",
        },
        {
          accent: "green",
          title: "Design Systems",
          description:
            "Scalable component libraries and token systems that keep your product consistent as it grows.",
          icon: "layout",
        },
        {
          accent: "orange",
          title: "Interaction Design",
          description:
            "Micro-interactions, transitions, and motion that make your interface feel alive and intuitive.",
          icon: "cpu",
        },
      ],
    },
    designCaseSection: {
      label: "PORTFOLIO",
      heading: "Designs that shipped",
      headingAccent: "and performed.",
      description: "A few recent UX/UI projects — from audit to launch.",
      cards: [
        {
          title: "Acme Studio",
          description: "Research-led redesign that lifted activation by 38%.",
          cursors: ["Bilal", "Hina"],
          href: "/portfolio/acme-studio",
        },
        {
          title: "FinFlow App",
          description: "Onboarding flow redesign — drop-off cut in half.",
          cursors: ["Sara", "Omar"],
          href: "/portfolio/finflow",
        },
        {
          title: "Clinic OS",
          description: "Design system + dashboard for healthcare ops.",
          cursors: ["Ayaan", "Usman"],
          href: "/portfolio/clinic-os",
        },
      ],
    },
    features: [
      {
        title: "User Research",
        description: "Deep understanding of your users through interviews, surveys, and data analysis.",
      },
      {
        title: "Wireframing & Prototyping",
        description: "Interactive prototypes that bring ideas to life before a single line of code.",
      },
      {
        title: "Visual Design",
        description: "Beautiful, consistent interfaces that align with your brand identity.",
      },
      {
        title: "Usability Testing",
        description: "Validating designs with real users to ensure intuitive experiences.",
      },
    ],
    process: [
      { step: "01", title: "Discover", description: "Understanding your users and business goals." },
      { step: "02", title: "Define", description: "Structuring information and user flows." },
      { step: "03", title: "Design", description: "Crafting visuals and interactive prototypes." },
      { step: "04", title: "Deliver", description: "Handoff with specs, assets, and guidelines." },
    ],
    orbitSphereItems: [
      "WIREFRAMES", "PROTOTYPES", "USER RESEARCH", "DESIGN SYSTEM",
      "USABILITY", "FIGMA", "INTERACTION", "ACCESSIBILITY",
      "IA DESIGN", "MOTION", "HEURISTICS", "USER FLOWS",
    ],
    processTimelineSteps: [
      {
        week: "Week 1",
        title: "Research & Discovery",
        description:
          "User interviews, competitive analysis, and defining the problem space. We map pain points and opportunities before touching a pixel.",
        color: "#c2410c",
        badgeBg: "#f4e0d6",
      },
      {
        week: "Week 2",
        title: "Wireframes & Flows",
        description:
          "Low-fidelity wireframes and user flows that validate structure and navigation. Quick iteration before visual design begins.",
        color: "#15803d",
        badgeBg: "#d9e7d6",
      },
      {
        week: "Week 3–4",
        title: "Visual Design & Prototyping",
        description:
          "High-fidelity mockups and interactive prototypes. Every component styled, every interaction defined, every edge case considered.",
        color: "#0e7490",
        badgeBg: "#cfe2e7",
      },
      {
        week: "Final Week",
        title: "Handoff & Testing",
        description:
          "Design system delivery, developer handoff with specs, and usability testing with real users to validate the experience.",
        color: "#1d4ed8",
        badgeBg: "#cfd9ec",
      },
    ],
    comparisonTable: {
      label: "WHY KIVRO",
      heading: "The design partner that ships",
      headingAccent: "not just pixel files.",
      description: "How we compare to the alternatives.",
      data: {
        columns: [
          { label: "Kivro Solution", highlight: true },
          { label: "In-house hiring" },
        ],
        rows: [
          {
            label: "Time to first ship",
            values: [
              { type: "check", text: "2–4 weeks" },
              { type: "cross", text: "3–6 months of recruiting" },
            ],
          },
          {
            label: "Monthly cost",
            values: [
              { type: "check", text: "Fixed, predictable" },
              { type: "cross", text: "Salaries + benefits + tooling" },
            ],
          },
          {
            label: "Design quality",
            values: [
              { type: "check", text: "Senior-led, research-backed" },
              { type: "dash", text: "Depends on hire" },
            ],
          },
          {
            label: "Scalability",
            values: [
              { type: "check", text: "Flex team, scale up or down" },
              { type: "cross", text: "Rigid, long-term commitment" },
            ],
          },
          {
            label: "Tools & licenses",
            values: [
              { type: "check", text: "Included (Figma, prototyping)" },
              { type: "cross", text: "Your cost" },
            ],
          },
        ],
      },
    },
    ctaBanner: {
      badge: "Booking design sprints · 2 slots open",
      line1: "Stop guessing what users want.",
      line2: "Start with",
      line2Accent: "a design that proves it.",
      description:
        "Tell us the product and where it's stuck. We'll come back inside two business days with a read on fit and the first thing worth designing — no slide decks, no proposal theater.",
      cta: { label: "Book a discovery call", href: "/contact" },
      primary: "#0137a2",
      primaryLight: "#5b8cff",
      badgeClass: "bg-[#15803d]",
    },
    meta: {
      title: "UX/UI Design Services - Kivro Solution",
      description:
        "Professional UX/UI design services. We create intuitive, user-centered interfaces that drive engagement and satisfaction.",
      keywords: ["UX design", "UI design", "user experience", "interface design", "prototyping"],
    },
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    category: "DESIGN & BUILD",
    badgeColor: "orange",
    icon: "phone",
    description: "High-performance apps built for scale.",
    longDescription:
      "Native and cross-platform mobile applications engineered for performance, reliability, and seamless user experiences across iOS and Android.",
    heroImage: "/images/services/mobile.jpg",
    serviceHero: {
      theme: "blue",
      badge: "Service · Mobile App Development",
      title: "Apps that perform as good as they look.",
      accentTitle: "Native. Cross-platform. Ship-ready.",
      description:
        "iOS and Android apps built for scale, speed, and seamless user experiences. From concept to App Store — we handle the full cycle.",
      primaryCta: { label: "Estimate your app", href: "#cost-estimator" },
      secondaryCta: { label: "Talk to an engineer", href: "/contact" },
    },
    statCards: [
      {
        accent: "blue",
        value: "150+",
        label: "Apps Shipped",
        icon: "trending-up",
      },
      {
        accent: "green",
        value: "4.8",
        label: "Average App Store Rating",
        icon: "smile",
      },
      {
        accent: "orange",
        value: "99.9%",
        label: "Uptime SLA",
        icon: "award",
      },
    ],
    featureSection: {
      label: "CAPABILITIES",
      heading: "Full-cycle mobile",
      headingAccent: "development.",
      description:
        "From native iOS to cross-platform Flutter — we pick the right stack and ship fast.",
      cards: [
        {
          accent: "blue",
          title: "iOS Development",
          description:
            "Swift and SwiftUI for iPhone and iPad apps that feel native and perform flawlessly.",
          icon: "phone",
        },
        {
          accent: "green",
          title: "Android Development",
          description:
            "Kotlin and Jetpack Compose for modern Android apps built for the Play Store.",
          icon: "phone",
        },
        {
          accent: "purple",
          title: "Cross-Platform",
          description:
            "React Native and Flutter for cost-effective multi-platform reach without compromise.",
          icon: "layout",
        },
        {
          accent: "orange",
          title: "API & Backend",
          description:
            "RESTful APIs, Firebase, and cloud infrastructure that power your app behind the scenes.",
          icon: "cloud",
        },
        {
          accent: "blue",
          title: "App Store Optimization",
          description:
            "Rank higher, convert more — listings, screenshots, and metadata optimized for discovery.",
          icon: "search",
        },
        {
          accent: "green",
          title: "Performance Tuning",
          description:
            "Battery efficiency, load times, and smooth 60fps interactions across all devices.",
          icon: "cpu",
        },
      ],
    },
    processTimelineSteps: [
      {
        week: "Week 1",
        title: "Strategy & Architecture",
        description:
          "Platform selection, feature prioritization, and technical architecture. We define the MVP scope and set up the project foundation.",
        color: "#c2410c",
        badgeBg: "#f4e0d6",
      },
      {
        week: "Week 2–4",
        title: "Core Build Sprint",
        description:
          "Agile development with working builds every two weeks. You see progress in real-time, not at the end.",
        color: "#15803d",
        badgeBg: "#d9e7d6",
      },
      {
        week: "Week 5–6",
        title: "QA & Polish",
        description:
          "Rigorous testing across devices, screen sizes, and OS versions. Performance profiling and UI polish.",
        color: "#0e7490",
        badgeBg: "#cfe2e7",
      },
      {
        week: "Final Week",
        title: "Launch & Handoff",
        description:
          "App Store submission, review preparation, monitoring setup, and complete handoff with docs and source code.",
        color: "#1d4ed8",
        badgeBg: "#cfd9ec",
      },
    ],
    comparisonTable: {
      label: "WHY KIVRO",
      heading: "The dev partner that ships",
      headingAccent: "not just demos.",
      description: "How we compare to building in-house or going offshore.",
      data: {
        columns: [
          { label: "Kivro Solution", highlight: true },
          { label: "In-house team" },
          { label: "Offshore agency" },
        ],
        rows: [
          {
            label: "Time to MVP",
            values: [
              { type: "check", text: "4–8 weeks" },
              { type: "cross", text: "3–6 months hiring + build" },
              { type: "dash", text: "2–4 months, variable quality" },
            ],
          },
          {
            label: "Cost",
            values: [
              { type: "check", text: "Fixed, predictable pricing" },
              { type: "cross", text: "Salaries + tools + overhead" },
              { type: "dash", text: "Low hourly, high rework" },
            ],
          },
          {
            label: "Tech stack",
            values: [
              { type: "check", text: "Right stack for your product" },
              { type: "dash", text: "Depends on hires" },
              { type: "cross", text: "Whatever they know" },
            ],
          },
          {
            label: "Store submission",
            values: [
              { type: "check", text: "Included, first time" },
              { type: "dash", text: "Learning curve" },
              { type: "cross", text: "Often extra or delayed" },
            ],
          },
          {
            label: "Post-launch support",
            values: [
              { type: "check", text: "Ongoing retainer available" },
              { type: "dash", text: "If team stays" },
              { type: "cross", text: "Usually disappears" },
            ],
          },
        ],
      },
    },
    ctaBanner: {
      badge: "Now taking on 2 new mobile projects",
      line1: "Your app idea deserves more than a template.",
      line2: "Start with",
      line2Accent: "a technical scoping call.",
      description:
        "Tell us what you're building. We'll come back in two business days with a platform recommendation, rough timeline, and honest fit assessment.",
      cta: { label: "Book a scoping call", href: "/contact" },
      primary: "#0137a2",
      primaryLight: "#5b8cff",
      badgeClass: "bg-[#15803d]",
    },
    projectTimeline: {
      phases: [
        { label: "Discovery", start: 1, end: 2 },
        { label: "Build", start: 3, end: 6 },
        { label: "QA & Launch", start: 7, end: 8 },
      ],
      weeks: [
        { label: "Week 1", date: "May 05" },
        { label: "Week 2", date: "May 12" },
        { label: "Week 3", date: "May 19" },
        { label: "Week 4", date: "May 26" },
        { label: "Week 5", date: "Jun 02" },
        { label: "Week 6", date: "Jun 09" },
        { label: "Week 7", date: "Jun 16" },
        { label: "Week 8", date: "Jun 23" },
      ],
      tasks: [
        {
          name: "Strategy & Architecture",
          start: 1,
          end: 2,
          color: "orange",
          note: "Platform selection, feature scope, and technical foundation.",
        },
        {
          name: "Core Build",
          start: 3,
          end: 5,
          color: "green",
          note: "iOS and Android development with bi-weekly working builds.",
        },
        {
          name: "API Integration",
          start: 4,
          end: 6,
          color: "teal",
          note: "Backend services, third-party APIs, and data layer.",
        },
        {
          name: "QA & Polish",
          start: 6,
          end: 7,
          color: "blue",
          note: "Device testing, performance profiling, UI refinement.",
        },
        {
          name: "Store Submission",
          start: 7,
          end: 8,
          color: "orange",
          note: "App Store / Play Store submission, review prep, launch.",
        },
      ],
    },
    features: [
      {
        title: "iOS & Android",
        description: "Native apps using Swift, Kotlin, and platform-specific best practices.",
      },
      {
        title: "Cross-Platform",
        description: "React Native and Flutter for cost-effective multi-platform reach.",
      },
      {
        title: "Performance",
        description: "Optimized for speed, battery efficiency, and smooth interactions.",
      },
      {
        title: "App Store Launch",
        description: "End-to-end submission, review preparation, and launch support.",
      },
    ],
    process: [
      { step: "01", title: "Strategy", description: "Defining platform, features, and technical approach." },
      { step: "02", title: "Build", description: "Agile development with bi-weekly demos." },
      { step: "03", title: "Test", description: "Rigorous QA across devices and scenarios." },
      { step: "04", title: "Launch", description: "Store submission, monitoring, and iteration." },
    ],
    meta: {
      title: "Mobile App Development - Kivro Solution",
      description:
        "Custom mobile app development for iOS and Android. Native and cross-platform solutions built for scale and performance.",
      keywords: [
        "mobile app development",
        "iOS development",
        "Android development",
        "React Native",
        "Flutter",
      ],
    },
  },
  {
    slug: "web",
    title: "Web App Development",
    category: "DESIGN & BUILD",
    badgeColor: "orange",
    icon: "monitor",
    description: "Dynamic, scalable web solutions for growth.",
    longDescription:
      "Modern web applications built with cutting-edge frameworks. From MVPs to enterprise platforms, we deliver fast, accessible, and scalable solutions.",
    heroImage: "/images/services/web.jpg",
    serviceHero: {
      theme: "blue",
      badge: "Service · Web App Development",
      title: "Websites that scale with your ambition.",
      accentTitle: "Built to perform. Ready to grow.",
      description:
        "Modern web applications built with cutting-edge frameworks. From MVPs to enterprise platforms — fast, accessible, and engineered for scale.",
      primaryCta: { label: "See our work", href: "#work" },
      secondaryCta: { label: "Talk to an engineer", href: "/contact" },
    },
    statCards: [
      { accent: "blue", value: "200+", label: "Websites Delivered", icon: "trending-up" },
      { accent: "green", value: "98%", label: "Core Web Vitals Score", icon: "smile" },
      { accent: "orange", value: "<2s", label: "Avg. Load Time", icon: "award" },
    ],
    featureSection: {
      label: "CAPABILITIES",
      heading: "Full-stack web",
      headingAccent: "development.",
      description:
        "From responsive marketing sites to complex SaaS platforms — we pick the right stack and ship fast.",
      cards: [
        { accent: "blue", title: "Modern Frameworks", description: "Next.js, React, Vue — whatever fits your team and goals.", icon: "code" },
        { accent: "green", title: "Full-Stack Capability", description: "Frontend to backend, APIs to databases — we cover the full stack.", icon: "cloud" },
        { accent: "orange", title: "Performance", description: "Core Web Vitals optimized, fast load times, smooth interactions.", icon: "search" },
        { accent: "purple", title: "Scalable Architecture", description: "Built to grow with your user base and business demands.", icon: "cpu" },
      ],
    },
    processTimelineSteps: [
      {
        week: "Week 1",
        title: "Discovery & Architecture",
        description: "Requirements gathering, tech stack selection, and architecture design. We define the MVP scope and set up the project foundation.",
        color: "#c2410c",
        badgeBg: "#f4e0d6",
      },
      {
        week: "Week 2–4",
        title: "Core Development",
        description: "Iterative sprints building features, APIs, and integrations. You see working builds every week; feedback loops are measured in hours.",
        color: "#15803d",
        badgeBg: "#d9e7d6",
      },
      {
        week: "Week 5–6",
        title: "Testing & Optimization",
        description: "Performance tuning, accessibility audits, SEO optimization, and cross-browser testing. Core Web Vitals validated before launch.",
        color: "#0e7490",
        badgeBg: "#cfe2e7",
      },
      {
        week: "Final Week",
        title: "Deploy & Handoff",
        description: "CI/CD setup, production deployment, monitoring, and full documentation handoff. Ready for real users.",
        color: "#1d4ed8",
        badgeBg: "#cfd9ec",
      },
    ],
    fitComparison: {
      goodFit: [
        "You need a custom web app, not a template — complexity demands code",
        "Your team uses React, Next.js, or wants to adopt a modern stack",
        "Performance and Core Web Vitals are business-critical (SEO, ads, conversions)",
        "You need integrations — APIs, databases, auth, payments",
        "You want something that scales from 100 to 100,000 users",
      ],
      notFit: [
        "A simple brochure site with 5 pages — use a no-code tool",
        "You need it live tomorrow — good software takes sprints, not days",
        "Budget is under $2k — consider a template or freelance marketplace",
        "You're not sure what you're building yet — start with our discovery call",
      ],
    },
    meta: {
      title: "Web App Development - Kivro Solution",
      description:
        "Scalable web application development using modern frameworks. From MVPs to enterprise platforms.",
      keywords: [
        "web development",
        "web apps",
        "Next.js development",
        "React development",
        "full-stack development",
      ],
    },
  },
  {
    slug: "cloud",
    title: "Cloud Development",
    category: "DESIGN & BUILD",
    badgeColor: "orange",
    icon: "cloud",
    description: "Secure, adaptable cloud architectures.",
    longDescription:
      "Cloud-native solutions designed for reliability, security, and cost efficiency. We architect and build on AWS, GCP, and Azure.",
    heroImage: "/images/services/cloud.jpg",
    features: [
      {
        title: "Cloud Architecture",
        description: "Well-architected frameworks for resilience and performance.",
      },
      {
        title: "Migration",
        description: "Seamless migration from legacy systems to modern cloud infrastructure.",
      },
      {
        title: "DevOps & CI/CD",
        description: "Automated pipelines, infrastructure as code, and deployment workflows.",
      },
      {
        title: "Cost Optimization",
        description: "Right-sizing and monitoring to keep cloud costs under control.",
      },
    ],
    process: [
      { step: "01", title: "Assess", description: "Audit current infrastructure and identify opportunities." },
      { step: "02", title: "Architect", description: "Design cloud-native solutions for your workload." },
      { step: "03", title: "Migrate", description: "Zero-downtime migration with rollback plans." },
      { step: "04", title: "Manage", description: "Ongoing monitoring, optimization, and support." },
    ],
    meta: {
      title: "Cloud Development Services - Kivro Solution",
      description:
        "Cloud architecture, migration, and DevOps services. AWS, GCP, and Azure solutions built for scale.",
      keywords: [
        "cloud development",
        "AWS",
        "cloud migration",
        "DevOps",
        "cloud architecture",
      ],
    },
  },
  {
    slug: "ai-native",
    title: "AI-Native Development",
    category: "INTELLIGENCE",
    badgeColor: "green",
    icon: "code",
    description: "Smarter, faster, more responsive AI.",
    longDescription:
      "We build AI-native applications that learn, adapt, and deliver intelligent experiences from day one. Not AI as a feature — AI as the foundation.",
    heroImage: "/images/services/ai-native.jpg",
    features: [
      {
        title: "LLM Integration",
        description: "GPT, Claude, and custom models integrated into your product workflows.",
      },
      {
        title: "RAG Pipelines",
        description: "Retrieval-augmented generation for accurate, context-aware AI responses.",
      },
      {
        title: "Fine-Tuning",
        description: "Custom model training on your domain-specific data.",
      },
      {
        title: "AI UX",
        description: "Interfaces designed for human-AI interaction patterns.",
      },
    ],
    process: [
      { step: "01", title: "Explore", description: "Identifying AI opportunities in your product." },
      { step: "02", title: "Prototype", description: "Rapid AI proof-of-concepts with measurable outcomes." },
      { step: "03", title: "Build", description: "Production-grade AI features with monitoring." },
      { step: "04", title: "Evolve", description: "Continuous learning and model improvement." },
    ],
    meta: {
      title: "AI-Native Development - Kivro Solution",
      description:
        "AI-native application development. LLM integration, RAG pipelines, and intelligent features built into your product.",
      keywords: [
        "AI development",
        "LLM integration",
        "RAG",
        "AI-native apps",
        "machine learning",
      ],
    },
  },
  {
    slug: "ai-agents",
    title: "Agentic AI Systems",
    category: "INTELLIGENCE",
    badgeColor: "green",
    icon: "bot",
    description: "Agents that automate tasks and coordinate workflows.",
    longDescription:
      "Autonomous AI agents that handle complex, multi-step tasks — coordinating across tools, systems, and data sources without human intervention.",
    heroImage: "/images/services/ai-agents.jpg",
    features: [
      {
        title: "Task Automation",
        description: "Agents that execute multi-step workflows autonomously.",
      },
      {
        title: "Tool Orchestration",
        description: "Connecting APIs, databases, and services under agent control.",
      },
      {
        title: "Guardrails",
        description: "Safety layers, human-in-the-loop, and approval workflows.",
      },
      {
        title: "Monitoring",
        description: "Full visibility into agent decisions, actions, and performance.",
      },
    ],
    process: [
      { step: "01", title: "Identify", description: "Finding high-impact automation opportunities." },
      { step: "02", title: "Design", description: "Agent architecture with safety and control built in." },
      { step: "03", title: "Deploy", description: "Staged rollout with monitoring and guardrails." },
      { step: "04", title: "Optimize", description: "Feedback loops for continuous agent improvement." },
    ],
    meta: {
      title: "Agentic AI Systems - Kivro Solution",
      description:
        "Autonomous AI agents for task automation and workflow orchestration. Safe, observable, and production-ready.",
      keywords: [
        "AI agents",
        "agentic AI",
        "workflow automation",
        "AI automation",
        "autonomous agents",
      ],
    },
  },
  {
    slug: "iot",
    title: "IoT & Device Development",
    category: "INTELLIGENCE",
    badgeColor: "green",
    icon: "cpu",
    description: "Bridging physical and digital for real-world impact.",
    longDescription:
      "End-to-end IoT solutions — from embedded firmware to cloud dashboards. We connect devices, collect data, and build the software that makes it all useful.",
    heroImage: "/images/services/iot.jpg",
    features: [
      {
        title: "Embedded Systems",
        description: "Firmware and software for resource-constrained devices.",
      },
      {
        title: "Edge Computing",
        description: "Processing data at the source for low-latency decisions.",
      },
      {
        title: "Device Connectivity",
        description: "MQTT, BLE, LoRa — connecting anything to everything.",
      },
      {
        title: "Dashboards & Analytics",
        description: "Real-time monitoring and insights from your IoT fleet.",
      },
    ],
    process: [
      { step: "01", title: "Prototype", description: "Proof-of-concept with hardware and software." },
      { step: "02", title: "Build", description: "Firmware, connectivity, and cloud infrastructure." },
      { step: "03", title: "Scale", description: "Mass deployment with OTA updates and fleet management." },
      { step: "04", title: "Analyze", description: "Data pipelines and actionable insights." },
    ],
    meta: {
      title: "IoT & Device Development - Kivro Solution",
      description:
        "End-to-end IoT development — embedded systems, edge computing, connectivity, and real-time analytics.",
      keywords: [
        "IoT development",
        "embedded systems",
        "edge computing",
        "device connectivity",
        "IoT solutions",
      ],
    },
  },
  {
    slug: "ai-audit",
    title: "AI Audit",
    category: "INTELLIGENCE",
    badgeColor: "green",
    icon: "search",
    description: "Evaluate your data and systems for AI adoption.",
    longDescription:
      "A comprehensive assessment of your data infrastructure, processes, and readiness for AI. Know exactly where you stand and what to do next.",
    heroImage: "/images/services/ai-audit.jpg",
    features: [
      {
        title: "Data Assessment",
        description: "Evaluate data quality, accessibility, and readiness for AI workloads.",
      },
      {
        title: "Infrastructure Review",
        description: "Audit your tech stack for AI compatibility and gaps.",
      },
      {
        title: "Use Case Mapping",
        description: "Identify high-ROI AI opportunities specific to your business.",
      },
      {
        title: "Roadmap",
        description: "A phased plan for AI adoption with clear milestones.",
      },
    ],
    process: [
      { step: "01", title: "Gather", description: "Collect data, documentation, and system details." },
      { step: "02", title: "Analyze", description: "Deep dive into data quality and infrastructure." },
      { step: "03", title: "Report", description: "Findings, recommendations, and prioritized roadmap." },
      { step: "04", title: "Guide", description: "Ongoing advisory as you execute the roadmap." },
    ],
    meta: {
      title: "AI Audit Services - Kivro Solution",
      description:
        "Comprehensive AI readiness assessment. Evaluate your data, infrastructure, and identify high-ROI AI opportunities.",
      keywords: [
        "AI audit",
        "AI readiness",
        "data assessment",
        "AI strategy",
        "AI adoption",
      ],
    },
  },
  {
    slug: "growth",
    title: "AI Growth Engine",
    category: "GROW",
    badgeColor: "blue",
    icon: "trending-up",
    description: "Turn MVPs into market leaders with data-driven growth.",
    longDescription:
      "Growth as a system. We combine AI, analytics, and experimentation to build sustainable growth engines for digital products.",
    heroImage: "/images/services/growth.jpg",
    features: [
      {
        title: "Growth Strategy",
        description: "Data-driven plans for acquisition, activation, and retention.",
      },
      {
        title: "A/B Testing",
        description: "Systematic experimentation to optimize conversion at every step.",
      },
      {
        title: "Analytics Setup",
        description: "Event tracking, dashboards, and attribution that actually inform decisions.",
      },
      {
        title: "AI-Powered Insights",
        description: "Predictive models for user behavior, churn, and lifetime value.",
      },
    ],
    process: [
      { step: "01", title: "Baseline", description: "Audit current metrics and identify growth levers." },
      { step: "02", title: "Experiment", description: "Rapid testing cycles with clear success criteria." },
      { step: "03", title: "Scale", description: "Double down on what works, cut what doesn't." },
      { step: "04", title: "Sustain", description: "Build systems for continuous, compounding growth." },
    ],
    meta: {
      title: "AI Growth Engine - Kivro Solution",
      description:
        "Data-driven growth services for digital products. A/B testing, analytics, and AI-powered insights to scale your product.",
      keywords: [
        "growth hacking",
        "product growth",
        "A/B testing",
        "growth strategy",
        "AI analytics",
      ],
    },
  },
  {
    slug: "marketing",
    title: "App Marketing",
    category: "GROW",
    badgeColor: "blue",
    icon: "speaker",
    description: "Targeted campaigns for installs, engagement, retention.",
    longDescription:
      "Full-funnel app marketing — from pre-launch buzz to post-install engagement. We drive the right users to your app and keep them coming back.",
    heroImage: "/images/services/marketing.jpg",
    features: [
      {
        title: "ASO",
        description: "App Store optimization for maximum organic discovery and conversion.",
      },
      {
        title: "Paid Acquisition",
        description: "ROI-focused campaigns across Meta, Google, TikTok, and Apple Search Ads.",
      },
      {
        title: "Retention Campaigns",
        description: "Push, email, and in-app messaging that drives engagement.",
      },
      {
        title: "Attribution",
        description: "Multi-touch attribution to understand what's really driving results.",
      },
    ],
    process: [
      { step: "01", title: "Audit", description: "Review current marketing performance and gaps." },
      { step: "02", title: "Plan", description: "Channel strategy, creative direction, and budget allocation." },
      { step: "03", title: "Execute", description: "Launch campaigns with real-time monitoring." },
      { step: "04", title: "Optimize", description: "Iterate on creative, targeting, and spend for max ROI." },
    ],
    meta: {
      title: "App Marketing Services - Kivro Solution",
      description:
        "Full-funnel app marketing — ASO, paid acquisition, retention campaigns, and attribution. Drive installs and engagement.",
      keywords: [
        "app marketing",
        "ASO",
        "app store optimization",
        "mobile marketing",
        "user acquisition",
      ],
    },
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map((s) => s.slug);
}

export function getServicesByCategory(category) {
  return services.filter((s) => s.category === category);
}
