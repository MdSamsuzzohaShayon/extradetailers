"use client";

import React from "react";
import styles from "./service.module.scss";
import { FaAngleRight, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Landing from "@/components/layout/Landing";

function Service() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.landing}>
        <Landing title="Service" />
      </section>

      {/* Service Section */}
      <section className="section-mt">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-4">
              {/* Service List */}
              <div
                className={`${styles.serviceList} bg-secondary-subtle mb-4 bg-body-tertiary p-4`}
              >
                <a
                  className={`${styles.serviceItem} d-flex justify-content-between align-items-center text-decoration-none bg-body`}
                >
                  <p className="text-uppercase m-0">
                    <strong>Convertible Cleaning</strong>
                  </p>
                  <FaAngleRight />
                </a>
                <a
                  className={`${styles.serviceItem} d-flex justify-content-between align-items-center text-decoration-none bg-body`}
                >
                  <p className="text-uppercase m-0">
                    <strong>Convertible Cleaning</strong>
                  </p>
                  <FaAngleRight />
                </a>
                <a
                  className={`${styles.serviceItem} d-flex justify-content-between align-items-center text-decoration-none bg-body`}
                >
                  <p className="text-uppercase m-0">
                    <strong>Engine Bay Cleaning</strong>
                  </p>
                  <FaAngleRight />
                </a>
                <a
                  className={`${styles.serviceItem} d-flex justify-content-between align-items-center text-decoration-none bg-body`}
                >
                  <p className="text-uppercase m-0">
                    <strong>Interior Cleaning</strong>
                  </p>
                  <FaAngleRight />
                </a>
                <a
                  className={`${styles.serviceItem} d-flex justify-content-between align-items-center text-decoration-none bg-body`}
                >
                  <p className="text-uppercase m-0">
                    <strong>Polishing and Buffing</strong>
                  </p>
                  <FaAngleRight />
                </a>
                <a
                  className={`${styles.serviceItem} d-flex justify-content-between align-items-center text-decoration-none bg-body`}
                >
                  <p className="text-uppercase m-0">
                    <strong>Touchless Car Wash</strong>
                  </p>
                  <FaAngleRight />
                </a>
                <a
                  className={`${styles.serviceItem} d-flex justify-content-between align-items-center text-decoration-none bg-body`}
                >
                  <p className="text-uppercase m-0">
                    <strong>Undercarriage Wash</strong>
                  </p>
                  <FaAngleRight />
                </a>
              </div>

              {/* Help Center */}
              <Image
                className={`${styles.helpCenter} bg-secondary-subtle mb-4 bg-body-tertiary p-4`}
                src="/coating.jpg"
                alt="Help Center Image"
                width={415}
                height={490}
              />
            </div>

            {/* Right Column */}
            <div className="col-md-8">
              <Image
                className="w-100 pb-5"
                src="/coating.jpg"
                alt="coating"
                width={380}
                height={570}
              />
              <h2 className="text-uppercase pb-3">
                <strong>Protective Coatings and Waxing Wonders</strong>
              </h2>
              <p className="lh-lg">
                As you embark on the journey of preserving and enhancing the
                brilliance of your vehicle, remember that at Carcareful, we
                don&apos;t just wash cars; we elevate the entire experience. Drive
                away not just with a clean car but with a renewed appreciation for
                the artistry of car care. It&apos;s time to unlock the true
                potential of your vehicle — a potential that gleams with
                brilliance at every turn. Welcome to a world where your car&apos;s
                radiance becomes a driving sensation.
              </p>
              <p className="lh-lg mb-5">
                Our team of skilled and experienced cleaners is dedicated to
                delivering excellence. We undergo rigorous training to ensure we
                meet the highest industry standards. Our eco-friendly cleaning
                products and practices ensure a clean and green environment.
              </p>
              <div className="row pb-5">
                {/* Service Challenge */}
                <div className="col-md-7">
                  <h5 className="text-uppercase fw-bold">Service Challenge</h5>
                  <p className="lh-lg">
                    This involves the application of specially formulated
                    solutions designed to break down and loosen dirt, grime, and
                    contaminants gentle wash.
                  </p>
                  <p className="lh-lg">
                    Book your appointments with ease, choosing times that align
                    with your busy lifestyle. Our flexible scheduling options
                    empower you to
                  </p>
                </div>
                {/* Carcareful List */}
                <div className="col-md-5  align-items-stretch">
                  <h5 className="text-uppercase fw-bold mb-3">carcareful list</h5>
                  {[
                    "Provide tips for car care in different seasons.",
                    "Include hacks for cleaning hard-to-reach areas.",
                    "Include before-and-after photos for visual impact.",
                    "Shiny Rides, Happy Drives Welcome.",
                    "Foamy Fun, Brilliant Drive Our Promise.",
                  ].map((item, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <FaCheckCircle
                        className={`${styles.textCustom} me-2`}
                        style={{ fontSize: "1.2rem" }}
                      />
                      <p className="m-0 p-0">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Image
                className="w-100 pb-5"
                src="/serviceSingle.jpg"
                alt="coating"
                width={380}
                height={570}
              />
              <div className="row">
                <div
                  className="col-md-6 d-flex"
                  style={{ backgroundColor: "rgba(55, 200, 171, 0.1)" }}
                >
                  <div>
                    <h5 className={`${styles.textCustom} text-uppercase fw-bold`}>
                      Hand Wash Expertise
                    </h5>
                    <p className="lh-lg">
                      Your vehicle is pampered with a meticulous hand wash.
                      Ensures gentle care and attention to every detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
