"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import styles from "./contact.module.scss";
import Landing from "@/components/layout/Landing";
import Footer from "@/components/layout/Footer";

function ContactPage() {
  return (
<>
<main className={styles.contact}>
      {/* Landing Section (Unchanged) */}
      <section className={styles.landing}>
        <Landing title="Contact" />
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Contact Info */}
            <div className="col-lg-7">
              <h3 className="text-primary text-uppercase fw-bold">Got Any Questions?</h3>
              <h2 className="mb-4 fw-bold">Get in Touch</h2>
              <p className="text-muted">For all your car needs, whether buying, selling, or servicing, we&apos;re here to assist you.</p>

              {/* Contact Details */}
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {[
                  { icon: <FaMapMarkerAlt />, title: "Location", detail: "66 Guild Street 512B" },
                  { icon: <FaEnvelope />, title: "Email", detail: "extradetailers@gmail.com" },
                  { icon: <FaPhone />, title: "Phone", detail: "(+44) 123 456 789" },
                  { icon: <FaClock />, title: "Opening", detail: "Mon-Sat 08:00 AM - 20:00 PM" }
                ].map((item, index) => (
                  <div key={index} className="d-flex align-items-center bg-white p-3 shadow-sm rounded">
                    <div className="text-primary fs-4 me-3">{item.icon}</div>
                    <div>
                      <p className="fw-bold text-uppercase mb-1">{item.title}</p>
                      <p className="mb-0 text-muted">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="d-flex align-items-center mt-4">
                <p className="fw-bold text-uppercase me-3">OUR SOCIAL MEDIA</p>
                <div className="d-flex gap-2">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, idx) => (
                    <a key={idx} href="#" className="d-flex align-items-center justify-content-center rounded-circle shadow p-2 text-primary bg-white" style={{ width: '40px', height: '40px' }}>
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-5">
              <div className="p-4 bg-white shadow rounded">
                <h4 className="fw-bold mb-4">Send a Message</h4>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control border-primary" placeholder="Your Name" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control border-primary" placeholder="Your Email" required />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control border-primary" placeholder="Subject" required />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control border-primary" rows={4} placeholder="Enter your message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-custom w-100">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
</>
  );
}

export default ContactPage;
