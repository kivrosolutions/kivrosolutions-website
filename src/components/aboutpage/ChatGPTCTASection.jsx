"use client";

import { useState } from "react";

export default function ChatGPTCTASection() {
  const [hoveredTile, setHoveredTile] = useState(null);

  // Generate tile colors for border
  const generateTiles = (count, direction) => {
    const tiles = [];
    const colors = ["#0137a2", "#1a5bd6", "#3b7bf0", "#6b9df5", "#0b1b3f", "#25409e"];
    
    for (let i = 0; i < count; i++) {
      tiles.push({
        id: `${direction}-${i}`,
        color: colors[i % colors.length],
        hoverColor: colors[(i + 2) % colors.length],
      });
    }
    return tiles;
  };

  const topTiles = generateTiles(20, "top");
  const bottomTiles = generateTiles(20, "bottom");
  const leftTiles = generateTiles(8, "left");
  const rightTiles = generateTiles(8, "right");

  return (
    <section
      style={{
        backgroundColor: "#f6f7fb",
        padding: "80px 60px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Top Tiles Border */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "4px",
          }}
        >
          {topTiles.map((tile) => (
            <div
              key={tile.id}
              onMouseEnter={() => setHoveredTile(tile.id)}
              onMouseLeave={() => setHoveredTile(null)}
              style={{
                width: "4.5%",
                height: "50px",
                backgroundColor: hoveredTile === tile.id ? tile.hoverColor : tile.color,
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>

        {/* Main Content Area */}
        <div
          style={{
            display: "flex",
            gap: "0",
          }}
        >
          {/* Left Tiles Border */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "50px",
            }}
          >
            {leftTiles.map((tile) => (
              <div
                key={tile.id}
                onMouseEnter={() => setHoveredTile(tile.id)}
                onMouseLeave={() => setHoveredTile(null)}
                style={{
                  height: "12.5%",
                  backgroundColor: hoveredTile === tile.id ? tile.hoverColor : tile.color,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              />
            ))}
          </div>

          {/* Center Content */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              padding: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "60px",
              border: "1px solid #e4e7ec",
              borderRadius: "0 16px 16px 0",
            }}
          >
            {/* Left Side - Text Content */}
            <div style={{ flex: "1 1 500px" }}>
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
              }}
            >
              <img
                src="/images/chatgpt-illustration.png"
                alt="ChatGPT AI Assistant"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                }}
              />
            </div>
          </div>

          {/* Right Tiles Border */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: "50px",
            }}
          >
            {rightTiles.map((tile) => (
              <div
                key={tile.id}
                onMouseEnter={() => setHoveredTile(tile.id)}
                onMouseLeave={() => setHoveredTile(null)}
                style={{
                  height: "12.5%",
                  backgroundColor: hoveredTile === tile.id ? tile.hoverColor : tile.color,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom Tiles Border */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "4px",
          }}
        >
          {bottomTiles.map((tile) => (
            <div
              key={tile.id}
              onMouseEnter={() => setHoveredTile(tile.id)}
              onMouseLeave={() => setHoveredTile(null)}
              style={{
                width: "4.5%",
                height: "50px",
                backgroundColor: hoveredTile === tile.id ? tile.hoverColor : tile.color,
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}