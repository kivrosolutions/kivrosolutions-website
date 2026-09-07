"use client";

import { useEffect, useRef, useState } from "react";

export default function ProblemEffectSolution() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        const centerY = windowHeight / 2;

        const progress = Math.max(
          0,
          Math.min(1, (centerY - sectionTop) / sectionHeight)
        );

        setScrollProgress(progress);

        // Determine which section is active based on scroll
        if (progress < 0.33) {
          setActiveSection(0);
        } else if (progress < 0.66) {
          setActiveSection(1);
        } else {
          setActiveSection(2);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: "problem",
      icon: "⚠",
      iconBg: "rgba(225, 29, 72, 0.08)",
      iconColor: "#e11d48",
      iconBorder: "rgba(225, 29, 72, 0.3)",
      title: "The Problem",
      titleColor: "#e11d48",
      description:
        "B2B websites became where clarity goes to die. Companies grew, evolved, transformed — but their websites stayed frozen in time, embarrassing more than they enable.",
      image: "/images/monitor-404.png",
      imageSide: "right",
      glowColor: "rgba(225, 29, 72, 0.15)",
    },
    {
      id: "effect",
      icon: "⚙",
      iconBg: "rgba(1, 55, 162, 0.08)",
      iconColor: "#0137a2",
      iconBorder: "rgba(1, 55, 162, 0.3)",
      title: "The Effect",
      titleColor: "#0137a2",
      description:
        'Founders apologize before sharing links. Sales teams create their own decks because the website "doesn\'t capture it." Prospects bounce, confused about what you do.',
      image: "/images/calculator.png",
      imageSide: "left",
      glowColor: "rgba(1, 55, 162, 0.12)",
    },
    {
      id: "solution",
      icon: "💡",
      iconBg: "rgba(21, 128, 61, 0.08)",
      iconColor: "#15803d",
      iconBorder: "rgba(21, 128, 61, 0.3)",
      title: "The Solution",
      titleColor: "#15803d",
      description:
        "At Kivro, we take what makes you amazing and make it obvious. Clear positioning. Compelling messaging. Conversion-focused design. Your breakthrough product deserves breakthrough clarity.",
      image: "/images/device-buttons.png",
      imageSide: "right",
      glowColor: "rgba(21, 128, 61, 0.15)",
    },
  ];

  // Dot color based on active section
  const dotColors = ["#e11d48", "#0137a2", "#15803d"];
  const currentDotColor = dotColors[activeSection];

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#f6f7fb",
        color: "#0b1b3f",
        padding: "120px 60px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Effects */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(1,55,162,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(21,128,61,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        {/* Vertical Timeline Line - MORE VISIBLE */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "60px",
            bottom: "60px",
            width: "2px",
            background: "linear-gradient(to bottom, #e11d48, #0137a2, #15803d)",
            transform: "translateX(-50%)",
            opacity: 0.4,
            borderRadius: "2px",
          }}
        />

        {/* Scroll Progress Dot - Moves with scroll */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: `calc(60px + ${scrollProgress * 100}% - ${scrollProgress * 120}px)`,
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            transition: "top 0.1s ease-out",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Main Dot */}
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: currentDotColor,
              boxShadow: `0 0 20px ${currentDotColor}, 0 0 40px ${currentDotColor}40`,
              border: "3px solid #ffffff",
              transition: "all 0.5s ease",
            }}
          />
          {/* Arrow pointing down */}
          <div
            style={{
              width: "0",
              height: "0",
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: `10px solid ${currentDotColor}`,
              transition: "all 0.5s ease",
              filter: `drop-shadow(0 2px 4px ${currentDotColor}60)`,
            }}
          />
        </div>

        {sections.map((section, index) => {
          const isLeft = section.imageSide === "left";

          return (
            <div
              key={section.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: index < sections.length - 1 ? "100px" : "0",
                position: "relative",
              }}
            >
              {/* Icon Box on Timeline */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  backgroundColor: section.iconBg,
                  border: `1px solid ${section.iconBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  zIndex: 2,
                  marginBottom: "40px",
                  backdropFilter: "blur(10px)",
                  boxShadow: `0 0 30px ${section.glowColor}`,
                  transition: "all 0.3s ease",
                  transform: activeSection === index ? "scale(1.1)" : "scale(1)",
                }}
              >
                {section.icon}
              </div>

              {/* Content Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "80px",
                  width: "100%",
                  flexWrap: "wrap",
                }}
              >
                {/* Image Side */}
                <div
                  style={{
                    flex: "1 1 300px",
                    maxWidth: "380px",
                    display: "flex",
                    justifyContent: isLeft ? "flex-start" : "flex-end",
                    animation: `float-y 5s ease-in-out ${index * 1.2}s infinite`,
                    order: isLeft ? 1 : 2,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "320px",
                    }}
                  >
                    {/* Glow behind image */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80%",
                        height: "80%",
                        background: `radial-gradient(circle, ${section.glowColor} 0%, transparent 70%)`,
                        filter: "blur(20px)",
                        pointerEvents: "none",
                      }}
                    />
                    <img
                      src={section.image}
                      alt={section.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        position: "relative",
                        zIndex: 1,
                        filter: `drop-shadow(0 20px 40px rgba(11,27,63,0.15))`,
                        transition: "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05) rotate(-2deg)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                      }}
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div
                  style={{
                    flex: "1 1 400px",
                    maxWidth: "500px",
                    textAlign: "center",
                    order: isLeft ? 2 : 1,
                  }}
                >
                  <h3
                    style={{
                      fontSize: "36px",
                      fontWeight: 700,
                      color: section.titleColor,
                      marginBottom: "24px",
                      lineHeight: 1.2,
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {section.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "17px",
                      lineHeight: 1.8,
                      color: "#52525b",
                      maxWidth: "450px",
                      margin: "0 auto",
                    }}
                  >
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CSS for float animation */}
      <style jsx>{`
        @keyframes float-y {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </section>
  );
}