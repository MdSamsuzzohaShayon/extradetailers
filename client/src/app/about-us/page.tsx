"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./about.module.scss";
import {
  FaCheckCircle,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";
import Landing from "@/components/layout/Landing";
import { Carousel } from "react-bootstrap";


const teamMembers = [
  { name: "Alex John Martin", role: "Wax Wizard", image: "/team-01.jpg" },
  { name: "Emily Johnson", role: "Exterior Expert", image: "/team-02.jpg" },
  { name: "Liam Campbell", role: "Master Polisher", image: "/team-03.jpg" },
  { name: "Jordan Taylor", role: "Interior Maestro", image: "/team-04.jpg" },
  { name: "Caleb Martinez", role: "Wax Wizard", image: "/team-05.jpg" },
  { name: "Sophia Carter", role: "Detail Specialist", image: "/team-06.jpg" },
  { name: "Michael Brown", role: "Tire Technician", image: "/team-07.jpg" },
  { name: "Olivia Green", role: "Glass Care Pro", image: "/team-08.jpg" },
];

const chunkArray = (arr: any[], size: number) => {
  return arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    []
  );
};

const AboutPage = () => {
  const groupedMembers = chunkArray(teamMembers, 4); // 4 items per slide

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.landing}>
        <Landing title="About Us" />
      </section>
      {/* Our Mission */}
      <section className="section-mt">
        <section className={`${styles.paddingTB} container`}>
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
                services! Our skilled team uses eco-friendly products to ensure
                a spotless, streak-free finish. From exterior detailing to tire
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
                  Choosing Sparkle & Shine Auto Spa isn&apos;t just choosing a
                  car wash; it&apos;s choosing a transformative experience for
                  your vehicle.
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
        <section className={`${styles.paddingTB} container`}>
          <h5 className={`${styles.textCustom} text-uppercase fw-bold`}>
            Our Team
          </h5>
          <hr />
          <h1 className="text-uppercase fw-bold pb-5">
            Team Excellence, Shine Together Always
          </h1>

          {/* Team Carousel */}
          <Carousel indicators={false} interval={3000}>
            {groupedMembers.map((group, index) => (
              <Carousel.Item key={index}>
                <div className="row">
                  {group.map((member, idx) => (
                    <div key={idx} className="col-md-3 text-center">
                      <div className={styles.teamMember}>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={280}
                          height={350}
                          className="w-100"
                        />
                        <div className={styles.socialIcons}>
                          <a href="#">
                            <FaInstagram />
                          </a>
                          <a href="#">
                            <FaTwitter />
                          </a>
                          <a href="#">
                            <FaLinkedin />
                          </a>
                        </div>
                      </div>
                      <h4 className="text-uppercase fw-bold my-3">
                        {member.name}
                      </h4>
                      <h5
                        className={`${styles.textCustom} text-uppercase fw-bold`}
                      >
                        {member.role}
                      </h5>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </section>
    </div>
  );
};

export default AboutPage;
