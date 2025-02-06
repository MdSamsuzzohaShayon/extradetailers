"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";

interface IHeroOverlayProps {
  className?: string;
}


const HeroOverlay = ({ className }: IHeroOverlayProps) => {
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
    <svg
      className={className ?? ""}
      width="100%"
      height="100%"
      viewBox="0 0 338.66666 190.5"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="linearGradient2">
          <stop style={{ stopColor: "#002255", stopOpacity: 1 }} offset="0" />
          <stop style={{ stopColor: "#002255", stopOpacity: 0 }} offset="1" />
        </linearGradient>
        <linearGradient
          xlinkHref="#linearGradient2"
          id="linearGradient3"
          x1="-0.084"
          y1="90.32"
          x2="211.52"
          y2="90.28"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.5,0,0,1,0,0)"
        />
      </defs>
      <rect style={{ fill: "url(#linearGradient3)" }} width="338.5" height="190.34" x="0.09" y="0.08" />
      <circle
        ref={circleEl}
        style={{ fill: "none", stroke: "#37c8ab", strokeWidth: 1.058 }}
        cx="70.57"
        cy="51.41"
        r="7.11"
      />
      <path
        style={{ fill: "#dbe3e2", fillOpacity: 0.56 }}
        d="M 316.03,0.18 248.28,27.70 l 46.58,28.83 43.81,-33.03 0.06,-23.43 z"
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
  );
};

export default HeroOverlay;
