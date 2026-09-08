"use client";

import { Code2, Server, Brain, Zap, Database, Cloud } from "lucide-react";

export default function TechStackSection() {
  const categories = [
    {
      title: "Frontend Development",
      description: "Fast, responsive interfaces built for web and mobile platforms.",
      technologies: [
        "React", "Next.js", "React Native", "TypeScript", 
        "Tailwind CSS", "Vue.js", "Redux", "Material-UI",
        "Chakra UI", "Framer Motion", "Storybook", "Webpack",
        "Vite", "SASS", "Bootstrap"
      ],
      icon: Code2,
      hasLightBorder: true, // <-- Light blue border flag
    },
    {
      title: "Backend & APIs",
      description: "Robust server-side architecture with scalable API development.",
      technologies: [
        "Node.js", "Python", "FastAPI", "GraphQL", 
        "REST APIs", "Express", "Django", "Flask",
        "Ruby on Rails", "Laravel", "Spring Boot", ".NET",
        "Socket.io", "Swagger", "NestJS"
      ],
      icon: Server,
      hasLightBorder: true, // <-- Light blue border flag
    },
    {
      title: "AI & Machine Learning",
      description: "Advanced AI models and machine learning solutions tailored to your needs.",
      technologies: [
        "OpenAI GPT-4", "Google Gemini", "Claude AI", "LangChain", 
        "TensorFlow", "PyTorch", "RAG Architecture", "Hugging Face",
        "Stable Diffusion", "Computer Vision", "NLP"
      ],
      icon: Brain,
      featured: true,
    },
    {
      title: "AI Automation",
      description: "Intelligent workflows and automation systems that work 24/7.",
      technologies: [
        "Voice AI Agents", "Chatbot Development", "Workflow Automation", 
        "Zapier", "Make.com", "Custom AI Agents", "Process Automation",
        "n8n", "Microsoft Power Automate", "UiPath"
      ],
      icon: Zap,
      featured: true,
    },
    {
      title: "Database & Storage",
      description: "Efficient data management and storage solutions.",
      technologies: [
        "PostgreSQL", "MongoDB", "Redis", "Supabase", 
        "AWS DynamoDB", "Vector Databases", "Pinecone", "MySQL",
        "MariaDB", "Firebase", "AWS S3", "Cloudinary",
        "Elasticsearch", "Neo4j", "Cassandra"
      ],
      icon: Database,
      hasLightBorder: true, // <-- Light blue border flag
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud infrastructure with automated deployment and monitoring.",
      technologies: [
        "AWS", "Google Cloud", "Vercel", "Docker", 
        "Kubernetes", "CI/CD", "GitHub Actions", "Azure",
        "DigitalOcean", "Terraform", "Jenkins", "GitLab CI",
        "CircleCI", "Prometheus", "Grafana", "Ansible"
      ],
      icon: Cloud,
      hasLightBorder: true, // <-- Light blue border flag
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "120px 60px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#0b1b3f",
              marginBottom: "16px",
              letterSpacing: "-0.5px",
            }}
          >
            Our Tech Stack
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#64748b",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            We pick tools that fit the job. These are the ones we keep coming back to because they work.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "24px",
          }}
        >
          {categories.map((category, index) => {
            const isFeatured = category.featured;
            const isLightBorder = category.hasLightBorder;
            
            // Border logic: Light border for specific cards, thick blue for featured, default gray for others
            const borderColor = isLightBorder 
              ? "rgba(1, 55, 162, 0.25)" 
              : isFeatured 
              ? "#0137a2" 
              : "#e2e8f0";
            
            const borderWidth = isFeatured ? "2px" : "1px";

            return (
              <div
                key={index}
                style={{
                  backgroundColor: isFeatured ? "#f8fafc" : "#ffffff",
                  border: `${borderWidth} solid ${borderColor}`,
                  borderRadius: "16px",
                  padding: "32px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: isFeatured 
                    ? "0 8px 32px rgba(1, 55, 162, 0.15)" 
                    : "0 2px 8px rgba(0, 0, 0, 0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  if (!isFeatured) {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.1)";
                    // Hover par border color ko wapis light blue ya default set karna taake change na ho
                    e.currentTarget.style.border = `${borderWidth} solid ${borderColor}`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isFeatured) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = isFeatured 
                      ? "0 8px 32px rgba(1, 55, 162, 0.15)" 
                      : "0 2px 8px rgba(0, 0, 0, 0.05)";
                    // Mouse leave par bhi border wapis original state mein
                    e.currentTarget.style.border = `${borderWidth} solid ${borderColor}`;
                  }
                }}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      backgroundColor: "#0137a2",
                      color: "#ffffff",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Core
                  </div>
                )}

                {/* Icon */}
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    backgroundColor: isFeatured ? "#0137a2" : "#f1f5f9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  {category.icon && (
                    <category.icon 
                      size={28} 
                      strokeWidth={2.5} 
                      color={isFeatured ? "#ffffff" : "#0137a2"} 
                    />
                  )}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#0b1b3f",
                    marginBottom: "12px",
                    paddingRight: isFeatured ? "80px" : "0",
                  }}
                >
                  {category.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "15px",
                    color: "#64748b",
                    lineHeight: 1.6,
                    marginBottom: "24px",
                  }}
                >
                  {category.description}
                </p>

                {/* Technology Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        backgroundColor: isFeatured ? "rgba(1, 55, 162, 0.06)" : "#f8fafc",
                        color: isFeatured ? "#0137a2" : "#475569",
                        padding: "8px 16px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: 500,
                        border: isFeatured ? "1px solid rgba(1, 55, 162, 0.25)" : "1px solid #e2e8f0",
                        transition: "all 0.2s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = isFeatured ? "#0137a2" : "#1e293b";
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.transform = "scale(1.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = isFeatured ? "rgba(1, 55, 162, 0.06)" : "#f8fafc";
                        e.currentTarget.style.color = isFeatured ? "#0137a2" : "#475569";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Focus Highlight Section */}
        <div
          style={{
            marginTop: "80px",
            background: "linear-gradient(135deg, #012980 0%, #0137a2 100%)",
            borderRadius: "20px",
            padding: "60px",
            textAlign: "center",
            color: "#ffffff",
            boxShadow: "0 20px 60px rgba(1, 55, 162, 0.35)",
          }}
        >
          <h3
            style={{
              fontSize: "36px",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            AI-Powered Solutions
          </h3>
          <p
            style={{
              fontSize: "18px",
              maxWidth: "700px",
              margin: "0 auto 32px",
              lineHeight: 1.7,
              opacity: 0.9,
            }}
          >
            We specialize in building intelligent systems that automate workflows, 
            enhance decision-making, and scale your business operations.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
              marginTop: "32px",
            }}
          >
            {["Custom AI Agents", "Voice Automation", "Intelligent Workflows", "24/7 AI Support"].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#0137a2",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  fontSize: "15px",
                  fontWeight: 600,
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}