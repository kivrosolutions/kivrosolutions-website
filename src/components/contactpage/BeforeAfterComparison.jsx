"use client";

import { X, Check, ArrowRight } from "lucide-react";

export default function BeforeAfterComparison() {
  const withoutItems = [
    "The site reflects who you were two years ago",
    "You look the same as (or worse than) your competitors",
    "Your team isn't proud to share the website link",
    "Conversions are flat and nobody can explain why",
  ];

  const withItems = [
    "Positioning that matches where the company actually is today",
    "A distinct brand that makes competitors look generic",
    "Prospects show up to calls already half-sold",
    "CRO-optimized pages with clear data on what's working",
  ];

  return (
    <section
      style={{
        backgroundColor: "#f6f7fb",
        padding: "100px 60px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 700,
            textAlign: "center",
            color: "#0b1b3f",
            marginBottom: "16px",
            letterSpacing: "-0.5px",
          }}
        >
          Still not sure?
        </h2>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 700,
            textAlign: "center",
            color: "#0b1b3f",
            marginBottom: "60px",
            letterSpacing: "-0.5px",
          }}
        >
          Here's what changes.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            marginBottom: "48px",
          }}
        >
          {/* Without KivroSolutions */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "32px",
              border: "1px solid #e4e7ec",
            }}
          >
            <div
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: 700,
                color: "#ef4444",
                backgroundColor: "rgba(239, 68, 68, 0.1)",
                padding: "6px 12px",
                borderRadius: "4px",
                letterSpacing: "1px",
                marginBottom: "24px",
              }}
            >
              WITHOUT KIVROSOLUTIONS
            </div>

            {/* Website Screenshot */}
            <div
              style={{
                backgroundColor: "#f1f5f9",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "24px",
                border: "1px solid #e4e7ec",
              }}
            >
              <img
                src="/images/contact/negative-comparision.jpeg"
                alt="Website without KivroSolutions"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {withoutItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: "#64748b",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <X size={12} color="#ef4444" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* With KivroSolutions */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "32px",
              border: "2px solid #0137a2",
              boxShadow: "0 10px 30px rgba(1, 55, 162, 0.1)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                fontSize: "11px",
                fontWeight: 700,
                color: "#0137a2",
                backgroundColor: "rgba(1, 55, 162, 0.1)",
                padding: "6px 12px",
                borderRadius: "4px",
                letterSpacing: "1px",
                marginBottom: "24px",
              }}
            >
              WITH KIVROSOLUTIONS
            </div>

            {/* Website Screenshot */}
            <div
              style={{
                backgroundColor: "#f6f7fb",
                borderRadius: "12px",
                padding: "20px",
                marginBottom: "24px",
                border: "1px solid #e4e7ec",
              }}
            >
              <img
                src="/images/contact/positive-comparision.jpeg"
                alt="Website with KivroSolutions"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(1, 55, 162, 0.15)",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {withItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "14px",
                    color: "#0b1b3f",
                    fontWeight: 500,
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(1, 55, 162, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={12} color="#0137a2" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              backgroundColor: "#0137a2",
              color: "#ffffff",
              padding: "16px 32px",
              fontSize: "14px",
              fontWeight: 600,
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              transition: "all 0.3s ease",
              letterSpacing: "0.5px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0b1b3f";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#0137a2";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            BOOK YOUR STRATEGY SESSION
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}