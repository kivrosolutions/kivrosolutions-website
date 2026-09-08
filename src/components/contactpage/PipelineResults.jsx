"use client";

export default function PipelineResults() {
  const stats = [
    { value: "35%", label: "Increase in clicks and impressions", company: "ClearlyRated" },
    { value: "30%", label: "Increase in demo requests", company: "Storylane" },
    { value: "80%", label: "Increase in demo requests", company: "RoomMaster" },
    { value: "45%", label: "Reduction in bounce rate", company: "Nimbus" },
    { value: "2.5x", label: "More qualified leads", company: "Cartwheel" },
  ];

  // Duplicate for seamless loop
  const allStats = [...stats, ...stats, ...stats];

  return (
    <section
      style={{
        backgroundColor: "#0b1b3f",
        padding: "100px 0",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          fontWeight: 700,
          textAlign: "center",
          color: "#ffffff",
          marginBottom: "60px",
          letterSpacing: "-0.5px",
          padding: "0 60px",
        }}
      >
        Results that show up <br />
        <span style={{ color: "#60a5fa" }}>in your pipeline.</span>
      </h2>

      <div
        style={{
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "24px",
            animation: "scrollPipeline 30s linear infinite",
            width: "max-content",
          }}
        >
          {allStats.map((stat, index) => (
            <div
              key={index}
              style={{
                minWidth: "320px",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "32px",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  fontSize: "56px",
                  fontWeight: 700,
                  color: "#60a5fa",
                  lineHeight: 1,
                  marginBottom: "16px",
                  letterSpacing: "-2px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#d0d8e8",
                  marginBottom: "16px",
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#93a4c9",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#60a5fa",
                  }}
                />
                {stat.company}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollPipeline {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </section>
  );
}