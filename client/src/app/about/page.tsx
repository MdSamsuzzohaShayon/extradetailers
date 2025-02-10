"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./about.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className={`${styles.hero} d-flex align-items-center p-5`}>
        <div className="container">
          <h1
            className={`${styles.textCustom} display-4 text-uppercase fw-bold text-start`}
          >
            About Us
          </h1>
        </div>
      </section>
      {/* Our Mission */}
      <section className={`${styles.paddingTop} container`}>
        <h5 className={`${styles.textCustom} text-uppercase fw-bold`}>
          About Us
        </h5>
        <hr />
        <h1 className="text-uppercase fw-bold pb-5">
          Sparkle, Shine, Impress Every Time
        </h1>
        <div className="row">
          <div className="col-md-5">
            {[
              "Glisten On Where Cars Embrace Brilliance.",
              "Dazzle Drives Our Craft, Your Shimmering Car.",
              "Elegance in Every Bubble, Brilliance in Shine.",
              "Suds of Joy, Gleam of Automotive Luxury.",
            ].map((item, index) => (
              <div key={index} className="d-flex align-items-center">
                <FaCheckCircle
                  className={`${styles.textCustom} me-2`}
                  style={{ fontSize: "1.2rem" }}
                />
                <p className="lh-lg m-0 p-0">{item}</p>
              </div>
            ))}
            <h3 className="text-uppercase fw-bold pt-4">
              Elevating your business with car washing
            </h3>
            <p className="lh-lg">
              Revitalize your vehicle&apos;s shine with our premium car wash
              services! Our skilled team uses eco-friendly products to ensure a
              spotless, streak-free finish. From exterior detailing to tire
              care, we provide a thorough cleaning experience.
            </p>
            <div className="my-5">
              <a
                href="#"
                className={`${styles.readMore} p-3 pe-5 ps-5 text-uppercase text-white text-decoration-none fw-bold`}
              >
                Read More
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <Image
              className="w-100"
              src="/serviceSingle.jpg"
              alt="coating"
              width={380}
              height={450}
            />
          </div>
        </div>
      </section>
      {/* achievement */}
      <section className={`${styles.noPadding} container bg-black p-0`}>
        <div className="row">
          <div className={`${styles.whyChooseUs} col-md-6`}></div>
          <div className="col-md-6">
            <div className={`${styles.achievement}`}>
              <h5 className={`${styles.textCustom} text-uppercase fw-bold`}>
                Why Choose us
              </h5>
              <hr className="border-white opacity-93" />
              <h1 className="text-uppercase text-white fw-bold">
                Washing Your Choose Brilliance
              </h1>
              <p className="lh-lg text-white opacity-80">
                Choosing Sparkle & Shine Auto Spa isn&apos;t just choosing a car
                wash; it&apos;s choosing a transformative experience for your
                vehicle.
              </p>

              {/* Achievement Grid */}
              <div className={styles.achievementGrid}>
                {[
                  { number: "25+", text: "Year Of Experience" },
                  { number: "38K+", text: "Total Car Washed" },
                  { number: "17+", text: "Awards & Recognition" },
                  { number: "14K+", text: "Trusted Clients" },
                ].map((item, index) => (
                  <div key={index} className={styles.achievementItem}>
                    <h3>{item.number}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Team Section */}
      <section className={`${styles.paddingTop} container`}>
        <h5 className={`${styles.textCustom} text-uppercase fw-bold`}>
          Our Team
        </h5>
        <hr />
        <h1 className="text-uppercase fw-bold pb-5">
          Team Excellence, Shine Together Always
        </h1>
        <div className="row">
          <div className="col-md-4">
            <Image src="/team-01.jpg" alt="coating" width={420} height={500} />
            <h3 className="text-uppercase align-items-center d-flex justify-content-center fw-bold my-3">
              Alex John Martin
            </h3>
            <h5
              className={`${styles.textCustom} justify-content-center align-items-center d-flex text-uppercase fw-bold`}
            >
              Our Team
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
