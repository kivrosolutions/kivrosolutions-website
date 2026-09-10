"use client";

import { Fragment, useEffect, useState } from "react";
import { Check } from "lucide-react";

export default function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const comparisonData = [
    {
      feature: "Consultative Approach",
      kivro: "We act as a technical partner, not just a vendor — we challenge assumptions, shape the product strategy, and co-own the outcome with you.",
      traditional: "They just build what's requested, even when the logic or user flow doesn't hold up.",
    },
    {
      feature: "Startup-Speed Delivery",
      kivro: "Production-ready builds shipped in 6–8 weeks, with weekly increments you can see and test — no black-box timelines.",
      traditional: "Long, rigid timelines with milestones locked months in advance.",
    },
    {
      feature: "Senior-Led Execution",
      kivro: "Every project is led by senior engineers and designers from day one — no junior hand-offs.",
      traditional: "Senior staff sell the project; junior teams quietly execute it.",
    },
    {
      feature: "AI & Automation Built-In",
      kivro: "We build AI automation directly into your product — lead qualification, workflows, and data-driven features from the start.",
      traditional: "AI is treated as an add-on, bolted on after the core build is 'done.'",
    },
    {
      feature: "Startup & Small Business Focus",
      kivro: "Built for lean teams — fast decisions, flexible scope, and pricing that respects a startup budget.",
      traditional: "Processes built for enterprise clients, which slows down smaller teams and inflates cost.",
    },
    {
      feature: "Result-Oriented Strategy",
      kivro: "We design for outcomes you can measure — user activation, conversions, and product-market fit signals.",
      traditional: "'Looks great' is treated as the finish line, with no tracking of real results.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#0b1b3f",
        color: "#ffffff",
        padding: "120px 60px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background gradient */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          background: "radial-gradient(circle at 50% 0%, rgba(96, 165, 250, 0.08) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        {/* WHY US Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "32px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "2px",
              color: "#93c5fd",
              textTransform: "uppercase",
              border: "1px solid rgba(96, 165, 250, 0.4)",
              padding: "8px 20px",
              borderRadius: "6px",
              backgroundColor: "rgba(96, 165, 250, 0.05)",
            }}
          >
            WHY US
          </span>
        </div>

        {/* Section Heading */}
        <h2
          style={{
            fontSize: "56px",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.15,
            marginBottom: "80px",
            letterSpacing: "-1px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.2s",
          }}
        >
          <span style={{ color: "#60a5fa" }}>Why Us</span>{" "}
          <span style={{ color: "#ffffff" }}>
            (and why not 500 other agencies)?
          </span>
        </h2>

        {/* Comparison Table */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "240px 60px 1fr 1fr",
            alignItems: "stretch",
            gap: "0",
          }}
        >
          {/* Table Header Row */}
          <div style={{ borderBottom: "2px solid #1e2d52" }}></div>
          <div style={{ borderBottom: "2px solid #1e2d52" }}></div>
          <div
            style={{
              padding: "28px 24px",
              fontSize: "22px",
              fontWeight: 700,
              textAlign: "start",
              letterSpacing: "2px",
              color: "#60a5fa",
              borderBottom: "2px solid #1e2d52",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.3s",
            }}
          >
            KIVROSOLUTIONS
          </div>
          <div
            style={{
              padding: "28px 24px",
              fontSize: "20px",
              fontWeight: 600,
              color: "#ffffff",
              borderBottom: "2px solid #1e2d52",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.4s",
            }}
          >
            Traditional agencies
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => (
            <Fragment key={index}>
              {/* Feature Name */}
              <div
                style={{
                  padding: "32px 0",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#ffffff",
                  lineHeight: 1.4,
                  borderBottom: "1px solid rgba(30, 45, 82, 0.5)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.5s ease ${0.5 + index * 0.1}s`,
                }}
              >
                {row.feature}
              </div>

              {/* Checkmark - Fixed Position */}
              <div
                style={{
                  padding: "32px 0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "1px solid rgba(30, 45, 82, 0.5)",
                  position: "relative",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0)",
                  transition: `all 0.4s ease ${0.6 + index * 0.1}s`,
                }}
              >
                {/* Background circle with border to cover the line */}
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#0b1b3f",
                    border: "2px solid rgba(96, 165, 250, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 2,
                    boxShadow: "0 0 20px rgba(96, 165, 250, 0.2)",
                  }}
                >
                  <Check
                    style={{
                      width: "18px",
                      height: "18px",
                      color: "#60a5fa",
                      strokeWidth: 3,
                    }}
                  />
                </div>
              </div>

              {/* Kivro Description */}
              <div
                style={{
                  padding: "32px 24px",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#e2e8f0",
                  borderBottom: "1px solid rgba(30, 45, 82, 0.5)",
                  backgroundColor: "rgba(96, 165, 250, 0.03)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                  transition: `all 0.5s ease ${0.5 + index * 0.1}s`,
                }}
              >
                {row.kivro}
              </div>

              {/* Traditional Description */}
              <div
                style={{
                  padding: "32px 24px",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "#93a4c9",
                  borderBottom: "1px solid rgba(30, 45, 82, 0.5)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(10px)",
                  transition: `all 0.5s ease ${0.5 + index * 0.1}s`,
                }}
              >
                {row.traditional}
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @media (max-width: 900px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}