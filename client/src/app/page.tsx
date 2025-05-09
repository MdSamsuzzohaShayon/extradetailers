'use client'

import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./home.module.scss";
import HeroOverlay from "@/components/svg/HeroOverlay";
import Testimonial from "@/components/home/Testimonial";
import Process from "@/components/home/Process";
import About from "@/components/home/About";
import Header from "@/components/layout/Header";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

/**
 * Reference -> https://lifestwp.websitelayout.net/
 * Main -> https://extradetailers.com
 * Content -> https://carcareful.peacefulqode.in/auto-car-spa/
 * 
 * Ref-1 -> https://nov-automize.myshopify.com/
 * Ref-2 -> https://karzo-demo.pbminfotech.com/demo2/
 * Ref-3 -> https://preview.themeforest.net/item/autorex-car-service-workshop-wordpress-theme/full_screen_preview/33387947?_ga=2.52420393.161412524.1738479323-1871772981.1710479217
 * 
 * Shapes-1 -> https://www.freepik.com/free-vector/graphic-design-geometric-wallpaper_7088577.htm#fromView=search&page=2&position=1&uuid=81443e3d-9070-4242-b7de-dd213f0f30fc&query=shapes
 * Shapes-2 -> https://www.freepik.com/free-vector/geometric-shapes-background-flat-design_6189813.htm#fromView=search&page=2&position=27&uuid=81443e3d-9070-4242-b7de-dd213f0f30fc&query=shapes
 */

export default function Home() {

  const videoRef = useRef<HTMLVideoElement>(null);


  return <>
    <main className={styles.home}>
      {/* Landing start  */}
      <section className={styles.landing}>
        {/* Video Background */}
        <div className={styles.videoBackground}>
          <video ref={videoRef} autoPlay muted loop playsInline>
            <source src="/videos/car-hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* SVG Overlay */}
        <HeroOverlay />


        {/* Content */}
        <div className={styles.content}>
          {/* Navbar */}
          <Header />

          {/* Hero Text */}
          <div className={`${styles.textContent} container text-white py-5 d-flex align-items-center`}>
            <div className="row">
              <div className="col-md-6">
                <p className="text-uppercase text-primary"><strong>The Ultimate Auto Spa</strong></p>
                <h1 className="display-4 fw-bold"> Mobile Car Detailing Anywhere in the USA!</h1>
                <p>Experience the luxury of a professionally detailed car. Book us and we’ll come to you anywhere in the USA.</p>
                <Link href="/service" className="btn btn-primary">Book Here <FaArrowRight /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Landing end  */}

      {/* About start  */}
      {/* Image ->  https://preview.themeforest.net/item/autorex-car-service-workshop-wordpress-theme/full_screen_preview/33387947?_ga=2.52420393.161412524.1738479323-1871772981.1710479217 */}
      <section className={`${styles.about} section-pt`}>
        <About styles={styles} />
      </section>
      {/* About end  */}

      {/* Service start  */}
      {/* <section className={`${styles.service} section-pt`}>
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
      <section className={`${styles.process} section-pt text-white`}>
        <Process styles={styles} />
      </section>
      {/* Process end  */}

      {/* Testimonial start  */}
      {/* 
      Reference 1 -> https://lifestwp.websitelayout.net/ 
      Reference 2 -> https://preview.themeforest.net/item/solutek-technology-it-services-wordpress-theme/full_screen_preview/54500724?_ga=2.37261280.1721018892.1739886211-1871772981.1710479217
      */}
      <section className={`${styles.testimonial} section-pt`}>
        <Testimonial styles={styles} />
      </section>
      {/* Testimonial end  */}

      <div className="section-pt"></div>
    </main>
    <Footer />
  </>
}
