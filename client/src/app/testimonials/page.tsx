"use client";

import React from "react";
import styles from "./testimonials.module.scss";
import Landing from "@/components/layout/Landing";
import Testimonial from "@/components/home/Testimonial";
import Footer from "@/components/layout/Footer";

/**
 * Reference -> https://nov-automize.myshopify.com/pages/testimonials-page
 */

function TestimonialsPage() {
  return (
    <React.Fragment>
      <div>
        {/* Hero Section */}
        <section className={styles.landing}>
          <Landing title="Testimonials" />
        </section>

        {/* Testimonial start  */}
        {/* Reference -> https://lifestwp.websitelayout.net/ */}
        <section className={`${styles.testimonial} section-mt`}>
          <Testimonial styles={styles} />
        </section>
        {/* Testimonial end  */}

        <section className="section-mt"></section>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default TestimonialsPage;
