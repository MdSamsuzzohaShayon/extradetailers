"use client";

import React from "react";
import styles from "./testimonials.module.scss";
import Landing from "@/components/layout/Landing";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Testimonial from "@/components/home/Testimonial";

function TestimonialsPage() {
  return (
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
  );
}

export default TestimonialsPage;
