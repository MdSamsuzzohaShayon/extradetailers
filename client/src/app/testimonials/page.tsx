import Testimonial from '@/components/home/Testimonial';
import Footer from '@/components/layout/Footer';
import React from 'react';
import styles from "./testimonials.module.scss";
import Landing from '@/components/layout/Landing';

/**
 * Refernce -> https://nov-automize.myshopify.com/pages/testimonials-page
 */

function TestimonialsPage() {
  return (
    <>
      <main>
        <section className={styles.landing}>
          <Landing title="Testimonials" />
        </section>

        <section className="section-pt">
          <Testimonial styles={styles} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TestimonialsPage;