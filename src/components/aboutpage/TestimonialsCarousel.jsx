"use client";

import { useState } from "react";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      logo: "Elevated",
      logoColor: "#0b1b3f",
      stat: "35%",
      statLabel: "Increase in qualified leads",
      quote:
        "\"Big thanks to the whole team. The entire team was a pleasure to work with and the deliverables were top notch. I would recommend this team to anyone looking for the best.\"",
      author: "Stephen Reddy",
      role: "CEO, Elevated",
      screenshot: "/screenshots/elevated.png",
    },
    {
      logo: "moon monster",
      logoColor: "#0b1b3f",
      stat: "80%",
      statLabel: "Increase in demo bookings",
      quote:
        "\"Kivro transformed our online presence. We went from a confusing website to one that clearly communicates our value. Highly recommended.\"",
      author: "Mike Morgan",
      role: "Marketing Director, Moon Monster",
      screenshot: "/screenshots/moonmonster.png",
    },
    {
      logo: "247",
      logoColor: "#0b1b3f",
      stat: "60%",
      statLabel: "Increase in outbound replies",
      quote:
        "\"Thanks for all the support on this partnership. Kivro is an awesome team to work with.\"",
      author: "David Mueller",
      role: "VP of Marketing, 247",
      screenshot: "/screenshots/247.png",
    },
    {
      logo: "TechFlow",
      logoColor: "#0b1b3f",
      stat: "45%",
      statLabel: "Increase in conversion rate",
      quote:
        "\"The team delivered beyond our expectations. Our new website not only looks amazing but also converts visitors into customers effectively.\"",
      author: "Sarah Johnson",
      role: "Founder, TechFlow",
      screenshot: "/screenshots/techflow.png",
    },
    {
      logo: "DataSync",
      logoColor: "#0b1b3f",
      stat: "90%",
      statLabel: "Reduction in bounce rate",
      quote:
        "\"Working with Kivro was a game-changer. They understood our vision and executed it perfectly. The results speak for themselves.\"",
      author: "James Wilson",
      role: "CTO, DataSync",
      screenshot: "/screenshots/datasync.png",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const total = testimonials.length;
    
    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff = diff - total;
    if (diff < -total / 2) normalizedDiff = diff + total;

    return normalizedDiff;
  };

  return (
    <section
      style={{
        backgroundColor: "#f6f7fb",
        padding: "100px 60px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Section Title */}
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "60px",
            color: "#0b1b3f",
            letterSpacing: "-0.5px",
          }}
        >
          Hear from our Customers
        </h2>

        {/* Carousel Container */}
        <div
          style={{
            position: "relative",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {testimonials.map((testimonial, index) => {
            const position = getCardPosition(index);
            const isActive = position === 0;
            const absPosition = Math.abs(position);

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: `translateX(calc(-50% + ${position * 380}px)) scale(${
                    isActive ? 1.1 : 1 - absPosition * 0.1
                  })`,
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  zIndex: isActive ? 10 : 10 - absPosition,
                  opacity: absPosition > 2 ? 0 : 1 - absPosition * 0.2,
                  cursor: "pointer",
                }}
              >
                {/* Card */}
                <div
                  style={{
                    width: "600px",
                    height: "380px",
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    display: "flex",
                    overflow: "hidden",
                    boxShadow: isActive
                      ? "0 30px 60px rgba(1, 55, 162, 0.15)"
                      : "0 10px 30px rgba(0, 0, 0, 0.08)",
                    border: isActive ? "2px solid #0137a2" : "1px solid #e4e7ec",
                  }}
                >
                  {/* Left Side - Screenshot */}
                  <div
                    style={{
                      flex: "0 0 45%",
                      backgroundColor: "#f6f7fb",
                      padding: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={testimonial.screenshot}
                      alt={`${testimonial.logo} website`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>

                  {/* Right Side - Content */}
                  <div
                    style={{
                      flex: 1,
                      padding: "30px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Logo & Stat */}
                    <div>
                      <div
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          color: testimonial.logoColor,
                          marginBottom: "20px",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {testimonial.logo}
                      </div>

                      <div
                        style={{
                          fontSize: "48px",
                          fontWeight: 700,
                          color: "#0137a2",
                          lineHeight: 1,
                          marginBottom: "8px",
                        }}
                      >
                        {testimonial.stat}
                      </div>
                      <div
                        style={{
                          fontSize: "13px",
                          color: "#71717a",
                          marginBottom: "20px",
                        }}
                      >
                        {testimonial.statLabel}
                      </div>
                    </div>

                    {/* Quote */}
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.6,
                        color: "#52525b",
                        fontStyle: "italic",
                        marginBottom: "20px",
                        flex: 1,
                      }}
                    >
                      {testimonial.quote}
                    </p>

                    {/* Author */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#0137a2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#ffffff",
                        }}
                      >
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#0b1b3f",
                          }}
                        >
                          {testimonial.author}
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#71717a",
                          }}
                        >
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          <button
            onClick={handlePrev}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#0137a2",
              border: "1px solid #0137a2",
              color: "#ffffff",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
e.currentTarget.style.backgroundColor = "#0b1b3f";
                e.currentTarget.style.borderColor = "#0b1b3f";
            }}
            onMouseLeave={(e) => {
e.currentTarget.style.backgroundColor = "#0137a2";
                e.currentTarget.style.borderColor = "#0137a2";
            }}
          >
            ←
          </button>

          <button
            onClick={handleNext}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#0137a2",
              border: "1px solid #0137a2",
              color: "#ffffff",
              fontSize: "20px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
e.currentTarget.style.backgroundColor = "#0b1b3f";
                e.currentTarget.style.borderColor = "#0b1b3f";
            }}
            onMouseLeave={(e) => {
e.currentTarget.style.backgroundColor = "#0137a2";
                e.currentTarget.style.borderColor = "#0137a2";
            }}
          >
            →
          </button>
        </div>

        {/* Dots Indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "24px",
          }}
        >
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: currentIndex === index ? "32px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: currentIndex === index ? "#0137a2" : "#e4e7ec",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}