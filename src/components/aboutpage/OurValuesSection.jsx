"use client";

import { useState } from "react";

export default function OurValuesSection() {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      title: "Innovation",
      description:
        "We chase what's technically possible before it becomes the industry standard — whether that's shipping an AI feature clients hadn't asked for yet or rebuilding a workflow that used to take five steps into one click. Innovation to us means shorter timelines and fewer manual tasks for the people who use what we build.",
    },
    {
      title: "Integrity",
      description:
        "We quote real timelines, not sales-friendly ones, and we tell clients when an idea won't work before we take their budget for it. If a project needs three more weeks to be done right, we say three more weeks — not 'almost there.'",
    },
    {
      title: "Collaboration",
      description:
        "The best solutions come from developers, designers, and clients arguing in the same room, not from one team guessing what another team meant. We loop clients into sprint reviews and decisions early, so nobody's surprised at launch.",
    },
    {
      title: "Excellence",
      description:
        "We'd rather ship one feature that works flawlessly than five that mostly work. Every release goes through real testing — not just 'it works on my machine' — before it reaches a single user.",
    },
    {
      title: "Customer-Centricity",
      description:
        "We build for the person who'll actually use the product, not for the person signing the invoice. That means asking 'will your customer understand this in three seconds?' before asking 'does this look impressive in a demo?'",
    },
    {
      title: "Adaptability",
      description:
        "Tech stacks change, client priorities shift mid-project, and requirements get rewritten after week two — that's normal, not a crisis. We build in a way that lets us pivot without throwing away three weeks of work.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#f6f7fb",
        color: "#0b1b3f",
        padding: "100px 60px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Title */}
        <h2
          style={{
            fontSize: "48px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "60px",
            letterSpacing: "-0.5px",
            color: "#0b1b3f",
          }}
        >
          Our Values
        </h2>

        {/* Two Column Layout */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Left Side - Value Buttons */}
          <div
            style={{
              flex: "0 0 280px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {values.map((value, index) => (
              <button
                key={index}
                onClick={() => setActiveValue(index)}
                style={{
                  padding: "18px 24px",
                  fontSize: "16px",
                  fontWeight: 500,
                  textAlign: "left",
                  border:
                    activeValue === index
                      ? "1px solid #0137a2"
                      : "1px solid #e4e7ec",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor:
                    activeValue === index ? "#0137a2" : "#ffffff",
                  color: activeValue === index ? "#ffffff" : "#0b1b3f",
                  boxShadow:
                    activeValue === index
                      ? "0 4px 12px rgba(1, 55, 162, 0.25)"
                      : "0 1px 2px rgba(11, 27, 63, 0.04)",
                }}
                onMouseEnter={(e) => {
                  if (activeValue !== index) {
                    e.currentTarget.style.backgroundColor = "#012980";
                    e.currentTarget.style.color = "#ffffff";
                    e.currentTarget.style.borderColor = "#0137a2";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeValue !== index) {
                    e.currentTarget.style.backgroundColor = "#ffffff";
                    e.currentTarget.style.color = "#0b1b3f";
                    e.currentTarget.style.borderColor = "#e4e7ec";
                  }
                }}
              >
                {value.title}
              </button>
            ))}
          </div>

          {/* Right Side - 3D Stacked Cards */}
          <div
            style={{
              flex: 1,
              minHeight: "400px",
              position: "relative",
              perspective: "1000px",
            }}
          >
            {values.map((value, index) => {
              // Calculate position relative to active
              let position = index - activeValue;
              if (position < 0) position += values.length;

              const isActive = position === 0;
              const isBehind1 = position === 1;
              const isBehind2 = position === 2;
              const isBehind3 = position === 3;

              // Stack offset values
              const yOffset = isActive
                ? 0
                : isBehind1
                ? 20
                : isBehind2
                ? 40
                : isBehind3
                ? 60
                : 80;

              const scale = isActive
                ? 1
                : isBehind1
                ? 0.97
                : isBehind2
                ? 0.94
                : isBehind3
                ? 0.91
                : 0.88;

              const opacity = isActive
                ? 1
                : isBehind1
                ? 0.85
                : isBehind2
                ? 0.7
                : isBehind3
                ? 0.55
                : 0;

              const zIndex = isActive
                ? 10
                : isBehind1
                ? 9
                : isBehind2
                ? 8
                : isBehind3
                ? 7
                : 6;

              return (
                <div
                  key={index}
                  onClick={() =>
                    isActive
                      ? setActiveValue((activeValue + 1) % values.length)
                      : setActiveValue(index)
                  }
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    padding: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: isActive ? "1px solid #0137a2" : "1px solid #e4e7ec",
                    boxShadow: isActive
                      ? "0 8px 32px rgba(1, 55, 162, 0.15)"
                      : "0 4px 16px rgba(11, 27, 63, 0.08)",
                    transform: `translateY(${yOffset}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: isActive ? "pointer" : "default",
                  }}
                >
                  {/* Subtle gradient overlay for depth */}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(135deg, rgba(1, 55, 162, 0.05) 0%, rgba(255,255,255,0) 100%)",
                        borderRadius: "12px",
                        pointerEvents: "none",
                      }}
                    />
                  )}

                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      animation: isActive ? "fadeIn 0.4s ease" : "none",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: 1.8,
                        color: "#52525b",
                        textAlign: "center",
                        maxWidth: "800px",
                        margin: "0 auto",
                      }}
                    >
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}