"use client";

import { useState } from "react";
import { CheckCircle, FileText, Clock } from "lucide-react";

export default function ContactHero() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    budget: "",
    source: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! We'll contact you soon.");
  };

  const expectations = [
    {
      icon: CheckCircle,
      title: "Website Performance Reality Check",
      description: "We'll walk through your current site and identify what's not working",
    },
    {
      icon: FileText,
      title: "Case Studies From Your Space",
      description: "See before/after transformations from similar companies",
    },
    {
      icon: Clock,
      title: "Timeline & Investment Clarity",
      description: "Get realistic timelines and ballpark investment for your project",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#f6f7fb",
        padding: "80px 60px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top Label */}
        <div style={{ marginBottom: "24px" }}>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "2px",
              color: "#0137a2",
              textTransform: "uppercase",
              border: "1px solid #0137a2",
              padding: "6px 16px",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            Talk to Us
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* Left Side - Content */}
          <div>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: 700,
                color: "#0b1b3f",
                lineHeight: 1.15,
                marginBottom: "24px",
                letterSpacing: "-1px",
              }}
            >
              Get a website that makes your product impossible to ignore
            </h1>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "40px",
                padding: "24px 0",
                borderTop: "1px solid #e4e7ec",
                borderBottom: "1px solid #e4e7ec",
                marginBottom: "40px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    color: "#0137a2",
                    lineHeight: 1,
                  }}
                >
                  61%
                </div>
                <div style={{ fontSize: "14px", color: "#64748b", marginTop: "4px" }}>
                  Increase in Leads
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 700,
                    color: "#0137a2",
                    lineHeight: 1,
                  }}
                >
                  64%
                </div>
                <div style={{ fontSize: "14px", color: "#64748b", marginTop: "4px" }}>
                  Increase in User Engagement
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0b1b3f",
                  marginBottom: "20px",
                }}
              >
                What to expect
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {expectations.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      gap: "16px",
                      padding: "16px",
                      backgroundColor: "#ffffff",
                      borderRadius: "12px",
                      border: "1px solid #e4e7ec",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(1, 55, 162, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <item.icon size={20} color="#0137a2" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "15px",
                          fontWeight: 600,
                          color: "#0b1b3f",
                          marginBottom: "4px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontSize: "13px", color: "#64748b", lineHeight: 1.5 }}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            style={{
              backgroundColor: "#0b1b3f",
              borderRadius: "16px",
              padding: "32px",
              color: "#ffffff",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                padding: "16px",
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                marginBottom: "24px",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "#0137a2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                K
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600 }}>
                  Book a free 30-minute strategy session
                </div>
                <div style={{ fontSize: "12px", color: "#93a4c9", marginTop: "2px" }}>
                  with our team
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label style={{ fontSize: "12px", color: "#93a4c9", marginBottom: "6px", display: "block" }}>
                    First name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", color: "#93a4c9", marginBottom: "6px", display: "block" }}>
                    Last name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label style={{ fontSize: "12px", color: "#93a4c9", marginBottom: "6px", display: "block" }}>
                    Phone number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1"
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", color: "#93a4c9", marginBottom: "6px", display: "block" }}>
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <label style={{ fontSize: "12px", color: "#93a4c9", marginBottom: "6px", display: "block" }}>
                    Company name*
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", color: "#93a4c9", marginBottom: "6px", display: "block" }}>
                    Budget*
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  >
                    <option value="" style={{ color: "#0b1b3f" }}>Please Select</option>
                    <option value="5k-10k" style={{ color: "#0b1b3f" }}>$5K - $10K</option>
                    <option value="10k-25k" style={{ color: "#0b1b3f" }}>$10K - $25K</option>
                    <option value="25k-50k" style={{ color: "#0b1b3f" }}>$25K - $50K</option>
                    <option value="50k+" style={{ color: "#0b1b3f" }}>$50K+</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label style={{ fontSize: "12px", color: "#93a4c9", marginBottom: "6px", display: "block" }}>
                  How did you hear about us?
                </label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "14px",
                    outline: "none",
                  }}
                >
                  <option value="" style={{ color: "#0b1b3f" }}>Please Select</option>
                  <option value="google" style={{ color: "#0b1b3f" }}>Google</option>
                  <option value="referral" style={{ color: "#0b1b3f" }}>Referral</option>
                  <option value="social" style={{ color: "#0b1b3f" }}>Social Media</option>
                </select>
              </div>

              <div style={{ marginBottom: "24px" }}>
                <label style={{ fontSize: "12px", color: "#93a4c9", marginBottom: "6px", display: "block" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us more about your project"
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "#ffffff",
                    fontSize: "14px",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "14px",
                  backgroundColor: "#0137a2",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0b1b3f";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#0137a2";
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}