'use client'

import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "./home.module.scss";
import HeroOverlay from "@/components/svg/HeroOverlay";
import Testimonial from "@/components/home/Testimonial";
import Process from "@/components/home/Process";
import About from "@/components/home/About";

/**
 * Reference -> https://lifestwp.websitelayout.net/
 * Main -> https://extradetailers.com
 * Content -> https://carcareful.peacefulqode.in/auto-car-spa/
 */

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);


  return (
      <main className={styles.home}>
        {/* Landing start  */}
        <section className={styles.landing}>
          {/* Video Background */}
          <div className={styles.videoBackground}>
            <video ref={videoRef} autoPlay muted loop playsInline>
              <source src="https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* SVG Overlay */}
          <HeroOverlay className={styles.heroOverlay} />


          {/* Content */}
          <div className={styles.content}>
            {/* Navbar */}
            <nav className={`navbar navbar-expand-lg text-white border-bottom ${styles.navbarContent}`}>
              <div className="container">
                <button
                  className="navbar-toggler border"
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-controls="navbarToggler"
                  aria-expanded={isOpen}
                  aria-label="Toggle navigation"
                >
                  <CiMenuBurger color="white" />
                </button>
                <Link className="navbar-brand" href="/">
                  <Image height={100} width={100} alt="extra-detailers-logo" src="/logo.png" className={styles.headerLogo} />
                </Link>
                <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarToggler">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {["Home", "About Us", "Gallery", "Gift Cards", "Contact", "FAQ", "Testimonials"].map((item, index) => (
                      <li className="nav-item" key={index}>
                        <strong>
                          <Link className="nav-link text-white text-uppercase" href={`/${item.toLowerCase().replace(" ", "-")}`}>
                            {item}
                          </Link>
                        </strong>
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex">
                    {["Sign In"
                      // ,"Register", "My Account"
                    ].map((btn, index) => (
                      <div className="btn btn-custom mx-1" key={index}>{btn} (Icon)</div>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Hero Text */}
            <div className={`${styles.textContent} container text-white py-5 d-flex align-items-center`}>
              <div className="row">
                <div className="col-md-6">
                  <p className="text-uppercase text-info"><strong>The Ultimate Auto Spa</strong></p>
                  <h1 className="display-4 fw-bold"> Mobile Car Detailing Anywhere in the USA!</h1>
                  <p>Experience the luxury of a professionally detailed car. Book us and we’ll come to you anywhere in the USA.</p>
                  <button className="btn btn-custom">Book Here</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Landing end  */}

        {/* About start  */}
        {/* Image ->  https://preview.themeforest.net/item/autorex-car-service-workshop-wordpress-theme/full_screen_preview/33387947?_ga=2.52420393.161412524.1738479323-1871772981.1710479217 */}
        <section className={`${styles.about} section-mt`}>
          <About styles={styles} />
        </section>
        {/* About end  */}

        {/* Service start  */}
        {/* <section className={`${styles.service} section-mt`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <p>Services</p>
              <h2>Professional Car Detailing Services</h2>
            </div>
          </div>
        </div>
      </section> */}
        {/* Service end  */}

        {/* Process start  */}
        {/* Reference -> https://preview.themeforest.net/item/auto-spa-car-wash-auto-detail-wordpress-theme/full_screen_preview/20097211?_ga=2.194236651.739106491.1738655325-752283782.1738653875 */}
        <section className={`${styles.process} section-mt text-white`}>
          <Process styles={styles} />
        </section>
        {/* Process end  */}

        {/* Testimonial start  */}
        {/* rederence -> https://lifestwp.websitelayout.net/ */}
        <section className={`${styles.testimonial} section-mt`}>
          <Testimonial styles={styles} />
        </section>
        {/* Testimonial end  */}

        <div className="section-mt"></div>
      </main>
  );
}
