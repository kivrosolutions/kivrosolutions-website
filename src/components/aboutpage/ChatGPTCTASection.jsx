"use client";

import { useState, useEffect } from "react";

export default function ChatGPTCTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#f6f7fb",
        padding: "80px 60px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(1, 55, 162, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(1, 55, 162, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main Content Container with AI Border */}
        <div
          style={{
            position: "relative",
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            padding: "4px",
            background: "linear-gradient(135deg, #0137a2 0%, #3b7bf0 50%, #0b1b3f 100%)",
            boxShadow: "0 20px 60px rgba(1, 55, 162, 0.2)",
          }}
        >
          {/* Animated Border Glow */}
          <div
            style={{
              position: "absolute",
              inset: "-2px",
              background: "linear-gradient(90deg, #0137a2, #3b7bf0, #60a5fa, #3b7bf0, #0137a2)",
              backgroundSize: "300% 100%",
              borderRadius: "26px",
              zIndex: -1,
              animation: "borderGlow 8s ease infinite",
              opacity: 0.6,
            }}
          />

          {/* Corner AI Nodes */}
          <div className="ai-corner-node top-left" />
          <div className="ai-corner-node top-right" />
          <div className="ai-corner-node bottom-left" />
          <div className="ai-corner-node bottom-right" />

          {/* Circuit Lines - Top */}
          <div
            style={{
              position: "absolute",
              top: "-1px",
              left: "100px",
              right: "100px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #3b7bf0, transparent)",
              opacity: 0.4,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                width: "20px",
                height: "2px",
                background: "#60a5fa",
                transform: "translateY(-50%)",
                boxShadow: "0 0 10px #60a5fa",
                animation: "circuitMove 3s ease-in-out infinite",
              }}
            />
          </div>

          {/* Circuit Lines - Bottom */}
          <div
            style={{
              position: "absolute",
              bottom: "-1px",
              left: "150px",
              right: "150px",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #3b7bf0, transparent)",
              opacity: 0.4,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                width: "20px",
                height: "2px",
                background: "#60a5fa",
                transform: "translateY(-50%)",
                boxShadow: "0 0 10px #60a5fa",
                animation: "circuitMove 3s ease-in-out infinite reverse",
              }}
            />
          </div>

          {/* Inner Content */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              padding: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "60px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Animated Background Pattern */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(1, 55, 162, 0.05) 0%, transparent 50%)`,
                pointerEvents: "none",
              }}
            />

            {/* Left Side - Text Content */}
            <div style={{ flex: "1 1 500px", position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(1, 55, 162, 0.08)",
                  padding: "6px 12px",
                  borderRadius: "20px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#0137a2",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#0137a2",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  AI-Powered Decision
                </span>
              </div>

              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "24px",
                  color: "#0b1b3f",
                }}
              >
                Can&apos;t decide if{" "}
                <span style={{ color: "#0137a2" }}>Kivro</span>
                <br />
                is right for your business?
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: "#52525b",
                  marginBottom: "32px",
                  maxWidth: "500px",
                }}
              >
                You don&apos;t have to figure it out alone. Let ChatGPT walk you
                through exactly why businesses choose us.
              </p>

              <button
                style={{
                  backgroundColor: "#0137a2",
                  color: "#ffffff",
                  padding: "16px 32px",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "none",
                  borderRadius: "9999px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0b1b3f";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(1, 55, 162, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0137a2";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Button Glow Effect */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    transform: "translateX(-100%)",
                    transition: "transform 0.6s",
                  }}
                />
                Ask ChatGPT
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Side - Illustration */}
            <div
              style={{
                flex: "1 1 400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Floating AI Particles */}
              <div className="ai-particle" style={{ top: "10%", left: "10%" }} />
              <div className="ai-particle" style={{ top: "20%", right: "15%", animationDelay: "0.5s" }} />
              <div className="ai-particle" style={{ bottom: "20%", left: "5%", animationDelay: "1s" }} />
              <div className="ai-particle" style={{ bottom: "10%", right: "10%", animationDelay: "1.5s" }} />

              <img
                src="/images/chatgpt-section.png"
                alt="ChatGPT AI Assistant"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  filter: "drop-shadow(0 20px 40px rgba(1, 55, 162, 0.2))",
                  animation: "float 6s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes borderGlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes circuitMove {
          0%, 100% {
            transform: translateX(0) translateY(-50%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(-50%);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .ai-corner-node {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 3px solid #0137a2;
          border-radius: 8px;
          z-index: 2;
          box-shadow: 0 0 20px rgba(1, 55, 162, 0.4);
          animation: cornerPulse 3s ease-in-out infinite;
        }

        .ai-corner-node::before {
          content: '';
          position: absolute;
          inset: -5px;
          border: 2px solid #3b7bf0;
          border-radius: 10px;
          opacity: 0.5;
        }

        .ai-corner-node.top-left {
          top: -20px;
          left: -20px;
        }

        .ai-corner-node.top-right {
          top: -20px;
          right: -20px;
        }

        .ai-corner-node.bottom-left {
          bottom: -20px;
          left: -20px;
        }

        .ai-corner-node.bottom-right {
          bottom: -20px;
          right: -20px;
        }

        @keyframes cornerPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 20px rgba(1, 55, 162, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(59, 123, 240, 0.6);
          }
        }

        .ai-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #0137a2, #3b7bf0);
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(1, 55, 162, 0.6);
          animation: particleFloat 4s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(10px, -15px) scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};