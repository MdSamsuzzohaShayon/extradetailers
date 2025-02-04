'use client'

import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./home.module.scss";
import HeroOverlay from "@/components/svg/HeroOverlay";

/**
 * Reference -> https://lifestwp.websitelayout.net/
 * Main -> https://extradetailers.com/ssss
 * Content -> https://carcareful.peacefulqode.in/auto-car-spa/
 */

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);
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
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={`${styles.aboutImgWrapper} position-relative d-flex column-gap-3`}>
                <Image className={styles.aboutImg1} src="/imgs/car-service-1.jpg" height={200} width={200} alt="car-about-1" />
                <Image className={styles.aboutImg2} src="/imgs/car-service-1.jpg" height={200} width={200} alt="car-about-2" />
                <div className={` ${styles.aboutBox} text-primary bg-white shadow p-3 mb-5 bg-body-tertiary text-center`} >
                  <h4 className="fs-1 fw-bold text-uppercase">12</h4>
                  <p className="fs-6">Years of experience</p>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <p>About</p>
              <h2>Professional Car Detailing Services</h2>
              <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touch points for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click through from Dev Ops. Nanotechnology immersion along the information highway will close the loop on focusing.</p>
              <button className="btn btn-custom">About Us</button>
            </div>
          </div>
        </div>
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
        <div className="container"  >
          <div className="row">
            <div className="col">
              <p>Our Process</p>
              <h2>We know your time is valuable</h2>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="process-1">
              <p>Icon (circle)</p>
              <h4 className="1-booking"> 1. Booking</h4>
            </div>
            <div className="right-arrow">
              <p>Right Arrow (circle)</p>
            </div>
            <div className="process-1">
              <p>Icon (circle)</p>
              <h4 className="1-booking"> 1. Booking</h4>
            </div>
            <div className="right-arrow">
              <p>Right Arrow (circle)</p>
            </div>
            <div className="process-1">
              <p>Icon (circle)</p>
              <h4 className="1-booking"> 1. Booking</h4>
            </div>
            <div className="right-arrow">
              <p>Right Arrow (circle)</p>
            </div>
            <div className="process-1">
              <p>Icon (circle)</p>
              <h4 className="1-booking"> 1. Booking</h4>
            </div>
          </div>
        </div>
      </section>
      {/* Process end  */}

      <section className="section-mt">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi error sit vel atque iusto omnis? Rem qui debitis quae quisquam commodi voluptates aliquam esse repudiandae ipsum alias laborum, dicta adipisci non maiores et, obcaecati nam. Eveniet, labore odit repellat maiores possimus, impedit, quae distinctio mollitia quas consequuntur minima. Aperiam repellendus ab voluptates corporis autem blanditiis facere non provident suscipit doloribus. Provident sed laboriosam quaerat velit inventore eius reiciendis magnam, sapiente vitae voluptates hic minima. Hic ea eius dolor excepturi, officiis consequatur necessitatibus eaque esse aperiam vel voluptatem obcaecati ullam odit quos blanditiis molestias dicta repellendus, doloribus nisi incidunt nostrum voluptates facere deserunt. Sapiente, suscipit necessitatibus vero voluptate consectetur dicta, fugiat veniam tempora nemo numquam cupiditate? Alias ea nulla adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi error sit vel atque iusto omnis? Rem qui debitis quae quisquam commodi voluptates aliquam esse repudiandae ipsum alias laborum, dicta adipisci non maiores et, obcaecati nam. Eveniet, labore odit repellat maiores possimus, impedit, quae distinctio mollitia quas consequuntur minima. Aperiam repellendus ab voluptates corporis autem blanditiis facere non provident suscipit doloribus. Provident sed laboriosam quaerat velit inventore eius reiciendis magnam, sapiente vitae voluptates hic minima. Hic ea eius dolor excepturi, officiis consequatur necessitatibus eaque esse aperiam vel voluptatem obcaecati ullam odit quos blanditiis molestias dicta repellendus, doloribus nisi incidunt nostrum voluptates facere deserunt. Sapiente, suscipit necessitatibus vero voluptate consectetur dicta, fugiat veniam tempora nemo numquam cupiditate? Alias ea nulla adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi error sit vel atque iusto omnis? Rem qui debitis quae quisquam commodi voluptates aliquam esse repudiandae ipsum alias laborum, dicta adipisci non maiores et, obcaecati nam. Eveniet, labore odit repellat maiores possimus, impedit, quae distinctio mollitia quas consequuntur minima. Aperiam repellendus ab voluptates corporis autem blanditiis facere non provident suscipit doloribus. Provident sed laboriosam quaerat velit inventore eius reiciendis magnam, sapiente vitae voluptates hic minima. Hic ea eius dolor excepturi, officiis consequatur necessitatibus eaque esse aperiam vel voluptatem obcaecati ullam odit quos blanditiis molestias dicta repellendus, doloribus nisi incidunt nostrum voluptates facere deserunt. Sapiente, suscipit necessitatibus vero voluptate consectetur dicta, fugiat veniam tempora nemo numquam cupiditate? Alias ea nulla adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi error sit vel atque iusto omnis? Rem qui debitis quae quisquam commodi voluptates aliquam esse repudiandae ipsum alias laborum, dicta adipisci non maiores et, obcaecati nam. Eveniet, labore odit repellat maiores possimus, impedit, quae distinctio mollitia quas consequuntur minima. Aperiam repellendus ab voluptates corporis autem blanditiis facere non provident suscipit doloribus. Provident sed laboriosam quaerat velit inventore eius reiciendis magnam, sapiente vitae voluptates hic minima. Hic ea eius dolor excepturi, officiis consequatur necessitatibus eaque esse aperiam vel voluptatem obcaecati ullam odit quos blanditiis molestias dicta repellendus, doloribus nisi incidunt nostrum voluptates facere deserunt. Sapiente, suscipit necessitatibus vero voluptate consectetur dicta, fugiat veniam tempora nemo numquam cupiditate? Alias ea nulla adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi error sit vel atque iusto omnis? Rem qui debitis quae quisquam commodi voluptates aliquam esse repudiandae ipsum alias laborum, dicta adipisci non maiores et, obcaecati nam. Eveniet, labore odit repellat maiores possimus, impedit, quae distinctio mollitia quas consequuntur minima. Aperiam repellendus ab voluptates corporis autem blanditiis facere non provident suscipit doloribus. Provident sed laboriosam quaerat velit inventore eius reiciendis magnam, sapiente vitae voluptates hic minima. Hic ea eius dolor excepturi, officiis consequatur necessitatibus eaque esse aperiam vel voluptatem obcaecati ullam odit quos blanditiis molestias dicta repellendus, doloribus nisi incidunt nostrum voluptates facere deserunt. Sapiente, suscipit necessitatibus vero voluptate consectetur dicta, fugiat veniam tempora nemo numquam cupiditate? Alias ea nulla adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi error sit vel atque iusto omnis? Rem qui debitis quae quisquam commodi voluptates aliquam esse repudiandae ipsum alias laborum, dicta adipisci non maiores et, obcaecati nam. Eveniet, labore odit repellat maiores possimus, impedit, quae distinctio mollitia quas consequuntur minima. Aperiam repellendus ab voluptates corporis autem blanditiis facere non provident suscipit doloribus. Provident sed laboriosam quaerat velit inventore eius reiciendis magnam, sapiente vitae voluptates hic minima. Hic ea eius dolor excepturi, officiis consequatur necessitatibus eaque esse aperiam vel voluptatem obcaecati ullam odit quos blanditiis molestias dicta repellendus, doloribus nisi incidunt nostrum voluptates facere deserunt. Sapiente, suscipit necessitatibus vero voluptate consectetur dicta, fugiat veniam tempora nemo numquam cupiditate? Alias ea nulla adipisci.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eligendi error sit vel atque iusto omnis? Rem qui debitis quae quisquam commodi voluptates aliquam esse repudiandae ipsum alias laborum, dicta adipisci non maiores et, obcaecati nam. Eveniet, labore odit repellat maiores possimus, impedit, quae distinctio mollitia quas consequuntur minima. Aperiam repellendus ab voluptates corporis autem blanditiis facere non provident suscipit doloribus. Provident sed laboriosam quaerat velit inventore eius reiciendis magnam, sapiente vitae voluptates hic minima. Hic ea eius dolor excepturi, officiis consequatur necessitatibus eaque esse aperiam vel voluptatem obcaecati ullam odit quos blanditiis molestias dicta repellendus, doloribus nisi incidunt nostrum voluptates facere deserunt. Sapiente, suscipit necessitatibus vero voluptate consectetur dicta, fugiat veniam tempora nemo numquam cupiditate? Alias ea nulla adipisci.</p>
      </section>
    </main>
  );
}
