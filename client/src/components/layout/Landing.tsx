import React from 'react';
import HeroOverlay from '../svg/HeroOverlay';
import styles from "./landing.module.scss";
import Header from './Header';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface ILandingProps{
  title: string;
}

const Landing: React.FC<ILandingProps> = ({title}) => {
  return (
    <React.Fragment>
      <div className={styles.videoBackground}>
        <video autoPlay muted loop playsInline>
          <source src="/videos/car-hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <HeroOverlay />
      <div className={styles.content}>
        <Header />
        <div className={`${styles.textContent} container text-white py-5 d-flex align-items-center`}>
          <div className="row">
            <div className="col">
              <h1 className="display-4 fw-bold"> Home / {title}</h1>
              <Link href="/service" className="btn btn-primary">
                Book Here <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Landing;