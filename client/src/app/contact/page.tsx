"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

const ContactPage = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className={`${styles.hero} text-white text-center py-5`}>
        <div className="container">
          <h1 className={`${styles.textCustom} text-uppercase fw-bold`}>
            Contact Us
          </h1>
          <p>Home / Contact Us</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`${styles.contact} section-mt`}>
        <div className="container">
          <div className="row justify-content-center">
            {/* Contact Info */}
            <div className="col-lg-5 m-5 mb-lg-0">
              <h3 className={`${styles.textCustom} text-uppercase fw-bold`}>
                Got Any Questions?
              </h3>
              <h2 className="mb-4 fw-bold">Get in Touch</h2>
              <p>
                For all your car needs, whether buying, selling, or servicing,
                we're here to assist you.
              </p>
              {/* Contact Info Grid */}
              <div className="row g-3">
                {/* Location */}
                <div
                  className={`${styles.contactItem} col-md-6 d-flex align-items-center`}
                >
                  <FaMapMarkerAlt
                    size={24}
                    className={`${styles.textCustom} me-3 `}
                  />
                  <div>
                    <p className="fw-bold text-uppercase mb-0">Location</p>
                    <p className="mb-0">66 Guild Street 512B</p>
                  </div>
                </div>

                {/* Email */}
                <div
                  className={`${styles.contactItem} col-md-6 d-flex align-items-center`}
                >
                  <FaEnvelope
                    size={24}
                    className={`${styles.textCustom} me-3 `}
                  />
                  <div>
                    <p className="fw-bold text-uppercase mb-0">Email</p>
                    <p className="mb-0">extradetailers@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div
                  className={`${styles.contactItem} col-md-6 d-flex align-items-center`}
                >
                  <FaPhone size={24} className={`${styles.textCustom} me-3 `} />
                  <div>
                    <p className="fw-bold text-uppercase mb-0">Phone</p>
                    <p className="mb-0">(+44) 123 456 789</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div
                  className={`${styles.contactItem} col-md-6 d-flex align-items-center`}
                >
                  <FaClock size={24} className={`${styles.textCustom} me-3 `} />
                  <div>
                    <p className="fw-bold text-uppercase mb-0">Opening</p>
                    <p className="mb-0">Mon-Sat 08:00 AM - 20:00 PM</p>
                  </div>
                </div>
              </div>
              {/* Social Media */}
              <div className="d-flex justify-content-between align-items-center mt-5">
                <p className="fw-bold text-uppercase mb-0">OUR SOCIAL MEDIA</p>
                <div className="d-flex gap-3">
                  <a
                    href="https://www.facebook.com/extradetailers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialIcon} rounded-circle d-flex align-items-center justify-content-center`}
                  >
                    <FaFacebookF size={20} className={styles.socialIconColor} />
                  </a>
                  <a
                    href="https://x.com/Extradetailers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialIcon} rounded-circle d-flex align-items-center justify-content-center`}
                  >
                    <FaTwitter size={20} className={styles.socialIconColor} />
                  </a>
                  <a
                    href="https://www.instagram.com/Extradetailers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialIcon} rounded-circle d-flex align-items-center justify-content-center`}
                  >
                    <FaInstagram size={20} className={styles.socialIconColor} />
                  </a>
                  <a
                    href="https://www.youtube.com/@Extradetailers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.socialIcon} rounded-circle d-flex align-items-center justify-content-center`}
                  >
                    <FaYoutube size={20} className={styles.socialIconColor} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-5">
              <form
                className={`${styles.contact_form} bg-white mb-5 bg-body-tertiary p-5`}
              >
                <div className="mb-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-5">
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom w-100 p-3 ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
