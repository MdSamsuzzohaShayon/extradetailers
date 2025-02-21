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

        {/* Contact Info & Form Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row g-5 align-items-center">

              {/* Contact Information */}
              <div className="col-lg-6">
                <h3 className="text-primary text-uppercase fw-bold">Need Help?</h3>
                <h2 className="mb-4 fw-bold">Get in Touch With Us</h2>
                <p className="text-muted">
                  Whether you have questions about our services or need assistance, feel free to reach out.
                </p>

                {/* Contact Details */}
                <div className="row g-3">
                  {[
                    { icon: <FaMapMarkerAlt />, title: "Location", detail: "66 Guild Street 512B" },
                    { icon: <FaEnvelope />, title: "Email", detail: "extradetailers@gmail.com" },
                    { icon: <FaPhone />, title: "Phone", detail: "(+44) 123 456 789" },
                    { icon: <FaClock />, title: "Opening Hours", detail: "Mon-Sat 08:00 AM - 20:00 PM" }
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

                {/* Social Media Links */}
                <div className="mt-4">
                  <p className="fw-bold text-uppercase">Follow Us</p>
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
              <div className="col-lg-6">
                <div className="p-4 bg-white shadow rounded">
                  <h4 className="fw-bold mb-4">Send Us a Message</h4>
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
                      <textarea className="form-control border-primary" rows={4} placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="section-pt">
          <div className="container">
            <h3 className="text-center text-primary fw-bold mb-4">Find Us on the Map</h3>
            <div className="rounded shadow overflow-hidden">
              <iframe
                title="Google Map"
                className="w-100"
                height="400"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450864!2d144.95373631531757!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727ddf10db5f1b!2s66%20Guild%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sau!4v1647902237637!5m2!1sen!2sau"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactPage;
