'use client'

import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import styles from "./home.module.scss";
import { useState } from "react";
import Link from "next/link";

/**
 * Reference -> https://lifestwp.websitelayout.net/
 */

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.home}>
      <div className={styles.landing}>
        {/* Video Background */}
        <div className={styles.videoBackground}>
          <video autoPlay muted loop playsInline>
            <source src="https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Landing Content Over Video */}
        <div className={styles.content}>
          {/* Navbar Start */}
          <nav className={`navbar navbar-expand-lg text-white border-bottom ${styles.navbarContent}`}>
            <div className="container">
              <button
                className="navbar-toggler border"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-controls="navbarTogglerDemo03"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                {/* <span className="navbar-toggler-icon"></span> */}
                <CiMenuBurger color="white" />
              </button>
              <Link className="navbar-brand" href="/">
                <Image height={100} width={100} alt="extra-detailers-logo" src="/logo.png" className={styles.headerLogo} />
              </Link>
              <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link text-white active" href="/about-us">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" href="/gallery">Gallery</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" href="/gift-cards">Gift Cards</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" href="/contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" href="/faq">FAQ</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" href="/testimonials">Testimonials</Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <div className="btn btn-info">Sign In (Icon)</div>
                  <div className="btn btn-info">Register (Icon)</div>
                  <div className="btn btn-info">My Account (Icon)</div>
                </form>
              </div>
            </div>
          </nav>
          {/* Navbar End */}

          {/* Text content start  */}
          <div className={`${styles.textCentent} container text-white py-5 d-flex align-items-center`}>
            <div className="row">
              <div className="col-md-6">
                <p className="text-uppercase text-info">The Ultimate Auto Spa</p>
                <h1 className="display-4 fw-bold">Experience the luxury of a professionally detailed car. Book us and we’ll come to you anywhere in the USA.</h1>
                <button className="btn btn-info">Book Here</button>
              </div>
            </div>
          </div>
          {/* Text content end  */}
        </div>

      </div>

    </div>
  );
}
