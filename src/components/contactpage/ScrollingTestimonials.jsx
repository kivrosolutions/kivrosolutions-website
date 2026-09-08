"use client";

export default function ScrollingTestimonials() {
  // Row 1: Development & Performance Focus (Scrolls Left)
  const row1Testimonials = [
    {
      logo: "Nimbus",
      quote: "They rebuilt our platform from scratch and it shows. Faster, cleaner, and our devs actually enjoy working in the codebase now.",
      author: "Farah Khalid",
      role: "CTO, Nimbus",
      tag: "SAAS",
    },
    {
      logo: "Cartwheel",
      quote: "We went from monthly releases to weekly ones. The team didn't just write code, they fixed how we ship.",
      author: "Daniel Osei",
      role: "Head of Product",
      tag: "SERVICES",
    },
    {
      logo: "TechFlow",
      quote: "The team delivered beyond our expectations. Our new website not only looks amazing but also converts visitors effectively.",
      author: "Sarah Johnson",
      role: "Founder",
      tag: "AI",
    },
    {
      logo: "DataSync",
      quote: "Our legacy system was a nightmare. Kivro modernized it seamlessly without any downtime.",
      author: "James Wilson",
      role: "CTO, DataSync",
      tag: "ENTERPRISE",
    },
    {
      logo: "CloudPeak",
      quote: "Incredible attention to detail in the frontend architecture. Scalable and beautifully written.",
      author: "Alex Chen",
      role: "Lead Engineer",
      tag: "SAAS",
    },
  ];

  // Row 2: AI & Automation Focus (Scrolls Right)
  const row2Testimonials = [
    {
      logo: "Verano Health",
      quote: "The AI-powered helpdesk they built handles most of our routine queries now. Our support team finally has room to breathe.",
      author: "Marcus Webb",
      role: "Operations Director",
      tag: "HEALTHTECH",
    },
    {
      logo: "Fieldstone",
      quote: "What used to be manual spreadsheet work is now automatic. It's rare to find a team that actually understands operations.",
      author: "Layla Ahmadi",
      role: "COO",
      tag: "LOGISTICS",
    },
    {
      logo: "AutoMate Inc",
      quote: "Their custom AI agents saved our support team 20+ hours a week. The ROI was visible within the first month.",
      author: "David Miller",
      role: "VP of Operations",
      tag: "AI",
    },
    {
      logo: "LogicFlow",
      quote: "Seamless integration of LLMs into our existing workflow. The guardrails they built give us total peace of mind.",
      author: "Elena Rostova",
      role: "Product Manager",
      tag: "SERVICES",
    },
    {
      logo: "SmartOps",
      quote: "Automation that actually works. No more manual data entry or missed follow-ups.",
      author: "Ryan Park",
      role: "Head of Growth",
      tag: "MARTECH",
    },
  ];

  // Row 3: Strategy, UX & Growth Focus (Scrolls Left)
  const row3Testimonials = [
    {
      logo: "Northline Retail",
      quote: "Small UX changes, huge revenue impact. They found friction points we didn't even know existed and fixed them fast.",
      author: "Priya Malhotra",
      role: "Founder",
      tag: "ECOMMERCE",
    },
    {
      logo: "Elevated",
      quote: "Big thanks to the whole team. The deliverables were top notch. I would recommend this team to anyone looking for the best.",
      author: "Stephen Reddy",
      role: "CEO, Elevated",
      tag: "SERVICES",
    },
    {
      logo: "Moon Monster",
      quote: "We went from a confusing website to one that clearly communicates our value. Highly recommended.",
      author: "Mike Morgan",
      role: "Marketing Director",
      tag: "MARTECH",
    },
    {
      logo: "GrowthHub",
      quote: "Their strategic approach to our landing page doubled our conversion rate in just 30 days.",
      author: "Lisa Thompson",
      role: "CMO",
      tag: "SAAS",
    },
    {
      logo: "Brandify",
      quote: "Finally, a development team that understands marketing, user psychology, and business goals.",
      author: "Tom Bradley",
      role: "Founder",
      tag: "AGENCY",
    },
  ];

  // Duplicate each row for seamless infinite loop
  const loopRow1 = [...row1Testimonials, ...row1Testimonials];
  const loopRow2 = [...row2Testimonials, ...row2Testimonials];
  const loopRow3 = [...row3Testimonials, ...row3Testimonials];

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
        Results that speak <br />
        <span style={{ color: "#60a5fa" }}>for themselves.</span>
      </h2>

      {/* Row 1: Development & Performance (Scrolls Left) */}
      <div
        style={{
          marginBottom: "24px",
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "24px",
            animation: "scrollLeft 45s linear infinite",
            width: "max-content",
          }}
        >
          {loopRow1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Row 2: AI & Automation (Scrolls Right - Reverse Direction) */}
      <div
        style={{
          marginBottom: "24px",
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "24px",
            animation: "scrollRight 50s linear infinite",
            width: "max-content",
          }}
        >
          {loopRow2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Row 3: Strategy, UX & Growth (Scrolls Left) */}
      <div
        style={{
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "24px",
            animation: "scrollLeft 40s linear infinite",
            width: "max-content",
          }}
        >
          {loopRow3.map((t, i) => (
            <TestimonialCard key={`r3-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div
      style={{
        minWidth: "380px",
        maxWidth: "380px",
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        padding: "24px",
        flexShrink: 0,
        transition: "border-color 0.3s ease, background-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(96, 165, 250, 0.4)";
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          {testimonial.logo}
        </div>
        <span
          style={{
            fontSize: "10px",
            fontWeight: 700,
            color: "#60a5fa",
            backgroundColor: "rgba(96, 165, 250, 0.1)",
            padding: "4px 10px",
            borderRadius: "4px",
            letterSpacing: "1px",
          }}
        >
          {testimonial.tag}
        </span>
      </div>

      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.6,
          color: "#d0d8e8",
          marginBottom: "20px",
          minHeight: "80px",
        }}
      >
        "{testimonial.quote}"
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          paddingTop: "16px",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "#0137a2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>
            {testimonial.author}
          </div>
          <div style={{ fontSize: "12px", color: "#93a4c9" }}>
            {testimonial.role}
          </div>
        </div>
      </div>
    </div>
  );
}