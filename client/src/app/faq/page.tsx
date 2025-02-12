"use client";

import Landing from "@/components/layout/Landing";
import React, { useState } from "react";
import styles from "./faq.module.scss";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { LuPlus, LuMinus } from "react-icons/lu"; // Thinner icons
import Image from "next/image";

const faqs = [
  {
    question: "What should I include in my personal statement?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Do you support banking loan?",
    answer:
      "Neque porro quisquam est quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What do I get when my account is paid off?",
    answer:
      "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  },
  {
    question: "How can I make a change to my application?",
    answer:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
  },
  {
    question: "Where can I find out about funding?",
    answer:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    question: "Do we really need a business plan?",
    answer:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.",
  },
];

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.landing}>
        <Landing title="FAQ" />
      </section>
      <section className="section-mt">
        <section className={`${styles.paddingTB} container`}>
          <div>
            <span className="text-uppercase fw-bold d-flex justify-content-center align-items-center py-3">
              Contact Info
            </span>
            <h2 className="text-uppercase fw-bold d-flex justify-content-center align-items-center">
              Our Contact Info
            </h2>
          </div>

          {/* Responsive Contact Info Section */}
          <div className="row g-4 justify-content-center py-5">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                detail: "66 Guild Street 512B",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                detail: "extradetailers@gmail.com",
              },
              {
                icon: <FaPhone />,
                title: "Phone",
                detail: "(+44) 123 456 789",
              },
            ].map((item, index) => (
              <div key={index} className="col-12 col-md-4">
                <div className="d-flex align-items-center bg-white p-5 shadow rounded h-100">
                  <div className="text-primary fs-1 me-3">{item.icon}</div>
                  <div>
                    <p className="fw-bold mb-1">{item.title}</p>
                    <p className="mb-0 text-muted">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="py-5">
            <span className="text-uppercase fw-bold d-flex justify-content-center align-items-center">
              FAQ
            </span>
            <h2 className="text-uppercase fw-bold d-flex justify-content-center align-items-center pt-3">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ List */}
          <div className="row">
            <div className="col-md-6">
              <div className="accordion">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="mb-3 p-3 border rounded shadow"
                    onClick={() => toggleFAQ(index)}
                    style={{
                      backgroundColor: "white",
                      cursor: "pointer",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
                    }}
                  >
                    {/* Question + Icon */}
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{ fontSize: "18px" }}>{faq.question}</span>
                      {activeIndex === index ? (
                        <LuMinus size={20} />
                      ) : (
                        <LuPlus size={20} />
                      )}
                    </div>

                    {/* Answer (Toggled) */}
                    {activeIndex === index && (
                      <p className="mt-2 mb-0 text-muted">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 ps-5">
              <Image
                height={550}
                width={600}
                src="/faq.jpg"
                alt="reviewer-image"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default FAQPage;
