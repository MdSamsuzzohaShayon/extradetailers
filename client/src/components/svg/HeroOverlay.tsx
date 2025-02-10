"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import styles from "./svg.module.scss";
import HeroBackground from "./HeroBackground";



const HeroOverlay = () => {
  const rectEl = useRef<SVGRectElement | null>(null);
  const circleEl = useRef<SVGCircleElement | null>(null);

  useGSAP(() => {
    // **Circle Animation (Expands & Shrinks)**
    gsap.to(circleEl.current, {
      x: 10,
      duration: 1.5,
      repeat: -1, // Infinite
      yoyo: true, // Reverse animation
      ease: "power1.inOut",
    });

    // **Rectangle Animation (Rotates & Moves)**
    gsap.to(rectEl.current, {
      x: 200, // Moves top
      duration: 2,
      repeat: -1, // Infinite
      yoyo: true, // Reverse
      ease: "power2.inOut",
    });
  });

  return (
    <div className={styles.heroOverlay} >
      <HeroBackground />

      <svg
        width="100%"
        height="auto"
        viewBox="0 0 338.66666 190.5"
        version="1.1"
        className={styles.heroShapes}
        preserveAspectRatio="xMidYMid meet"
      >
        <circle
          ref={circleEl}
          style={{ fill: "none", stroke: "#37c8ab", strokeWidth: 1.058 }}
          cx="70.57"
          cy="51.41"
          r="7.11"
        />
        <rect
          ref={rectEl}
          style={{ fill: "none", stroke: "#37c8ab", strokeWidth: 1.058 }}
          width="10"
          height="10"
          x="17.74"
          y="264.24"
          transform="rotate(-46.05)"
        />
      </svg>
    </div>
  );
};

export default HeroOverlay;
