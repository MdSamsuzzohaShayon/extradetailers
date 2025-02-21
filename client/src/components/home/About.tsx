import { TModuleStyle } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

interface IAboutProps {
  styles: TModuleStyle;
}

function About({ styles }: IAboutProps) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-5 text-center text-md-start mb-4 mb-md-0">
          <div className={`${styles.aboutImgWrapper} position-relative d-flex gap-3 justify-content-center`}>
            {/* Main Image */}
            <Image
              className={`${styles.aboutImg1} rounded shadow`}
              src="/imgs/car-service-1.jpg"
              height={220}
              width={220}
              alt="Car Detailing"
              priority
            />
            {/* Secondary Image */}
            <Image
              className={`${styles.aboutImg2} rounded shadow`}
              src="/imgs/car-service-2.jpg"
              height={220}
              width={220}
              alt="Car Service"
              priority
            />
            {/* Experience Box */}
            <div className={`${styles.aboutBox} text-primary bg-white shadow-lg p-3 rounded text-center position-absolute`} style={{ bottom: "-20px", left: "50%", transform: "translateX(-50%)" }}>
              <h4 className="fs-1 fw-bold text-uppercase">12</h4>
              <p className="fs-6 mb-0">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="col-md-7">
          <p className="text-uppercase text-primary fw-bold">About Us</p>
          <h2 className="fw-bold">Professional Car Detailing Services</h2>
          <p className="text-muted">
            We provide expert car detailing services with **12 years of experience**. Our team uses the latest techniques to enhance your vehicle’s appearance, ensuring a pristine and polished finish. 
            From deep cleaning to paint protection, we cover it all!
          </p>
          <Link className="btn btn-primary" href="/about-us" >Learn More <MdExpandMore /> </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
