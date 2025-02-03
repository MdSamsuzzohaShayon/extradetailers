'use client'

import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { useState, useRef } from "react";
import Link from "next/link";
import styles from "./home.module.scss";
import HeroOverlay from "@/components/svg/HeroOverlay";

/**
 * Reference -> https://lifestwp.websitelayout.net/
 * Main -> https://extradetailers.com/ssss
 */

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className={styles.home}>
      {/* Landing start  */}
      <div className={styles.landing}>
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
                  {["Home","About Us", "Gallery", "Gift Cards", "Contact", "FAQ", "Testimonials"].map((item, index) => (
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
      </div>
      {/* Landing end  */}

      {/* Service start  */}
      {/* Image ->  https://preview.themeforest.net/item/autorex-car-service-workshop-wordpress-theme/full_screen_preview/33387947?_ga=2.52420393.161412524.1738479323-1871772981.1710479217 */}
      <div className={styles.service}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className={`${styles.serviceImgWrapper} position-relative d-flex column-gap-3`}>
                <Image className={styles.serviceImg1} src="/imgs/car-service-1.jpg" height={600} width={200} alt="car-service-1" />
                <Image className={styles.serviceImg2} src="/imgs/car-service-1.jpg" height={600} width={200} alt="car-service-2" />
                <div className={` ${styles.srviceBox} position-absolute text-primary bg-white drop-shadow`} >
                  There will be text
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <p>Welcome to Our workshop</p>
              <h2>Professional Car Detailing Services</h2>
              <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touch points for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click through from Dev Ops. Nanotechnology immersion along the information highway will close the loop on focusing.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Service end  */}
    </div>
  );
}
