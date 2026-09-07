"use client";

import { useState } from "react";

export default function OurValuesSection() {
  const [activeValue, setActiveValue] = useState(0);

  const values = [
    {
      title: "Innovation",
      description:
        "We keep pushing what AI can safely take over, from voice agents that answer at 2 AM to reports that compile themselves. Innovation for us isn't novelty. It's finding the next piece of work we can hand to a machine so a team gets its time back.",
    },
    {
      title: "Integrity",
      description:
        "We believe in transparent communication and honest partnerships. Every project we take on is treated with the utmost professionalism, and we deliver on our promises. No hidden agendas, no overpromising—just reliable, ethical work that you can trust.",
    },
    {
      title: "Collaboration",
      description:
        "Great results come from great teamwork. We embed ourselves with your team, learning your business inside out. We're not just vendors; we're partners who invest in your success and work alongside you to achieve breakthrough results.",
    },
    {
      title: "Excellence",
      description:
        "Good enough isn't in our vocabulary. We obsess over every detail, from the first line of code to the final deployment. Our commitment to excellence means delivering solutions that not only meet but exceed your expectations, every single time.",
    },
    {
      title: "Customer-Centricity",
      description:
        "Your success is our success. We start every project by deeply understanding your challenges and goals. Every decision we make is guided by one question: How does this create value for our client? Your growth is the ultimate measure of our performance.",
    },
    {
      title: "Adaptability",
      description:
        "The business landscape changes fast, and so do we. We stay agile, continuously learning and evolving our approach to match your needs. Whether it's adopting new technologies or pivoting strategies, we're always ready to adapt and deliver.",
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