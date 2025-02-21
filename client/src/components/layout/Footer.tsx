"use client"

import React from 'react';
import styles from "./footer.module.scss";
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import FooterBottomShape from '../svg/FooterBottomShape';

function Footer() {
  return (
    <footer className={`${styles.footer || ""} overflow-x-hidden bg-dark text-white`}>
      {/* Top Section */}
      <div className={`${styles.footerTop} border-bottom d-flex align-items-center`}>
        <div className="container py-3">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-3 mb-3 mb-md-0">
              <Image src="/logo.png" height={100} width={100} alt='extra-detailer-logo' />
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3 d-flex align-items-center justify-content-center justify-content-md-start">
              <FaMapMarkerAlt size={44} className="me-2" />
              <div>
                <p className="fw-bold mb-1">Location</p>
                <p className="mb-0">66 Guild Street 512B</p>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center justify-content-md-start">
              <FaPhoneAlt size={44} className="me-2" />
              <div>
                <p className="fw-bold mb-1">Call Us</p>
                <p className="mb-0">(+44) 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`${styles.footerBottom} py-5 position-relative`}>
        <div className={`${styles.footerContent}`}>
          <div className={`container ${styles.footerContent}`}>
            <div className="row">
              <div className="col-md-3">
                <h4 className="text-uppercase mb-3">About Us</h4>
                <p>Revitalize your vehicle’s shine with our premium car wash services!</p>
                <div className="d-flex gap-3 mt-3">
                  <a href="#" className={`${styles.socialIcon} border rounded-circle p-2 d-flex justify-content-center align-items-center`}><FaFacebookF /></a>
                  <a href="#" className={`${styles.socialIcon} border rounded-circle p-2 d-flex justify-content-center align-items-center`}><FaTwitter /></a>
                  <a href="#" className={`${styles.socialIcon} border rounded-circle p-2 d-flex justify-content-center align-items-center`}><FaYoutube /></a>
                  <a href="#" className={`${styles.socialIcon} border rounded-circle p-2 d-flex justify-content-center align-items-center`}><FaLinkedinIn /></a>
                </div>
              </div>
              <div className="col-md-3">
                <h4 className="text-uppercase mb-3">Useful Links</h4>
                <ul className='list-unstyled'>
                  <li><a href="#" className='text-white text-decoration-none d-block py-1'>About Us</a></li>
                  <li><a href="#" className='text-white text-decoration-none d-block py-1'>Our Services</a></li>
                  <li><a href="#" className='text-white text-decoration-none d-block py-1'>Contact Us</a></li>
                  <li><a href="#" className='text-white text-decoration-none d-block py-1'>FAQ</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h4 className="text-uppercase mb-3">Contact Info</h4>
                <p><strong>Address:</strong> 1095 Howard Street, San Francisco, USA</p>
                <p><strong>Email:</strong> extradetailers@gmail.com</p>
              </div>
              <div className="col-md-3">
                <h4 className="text-uppercase mb-3">Newsletter</h4>
                <p>Subscribe to our newsletter for discounts and more.</p>
                <form>
                  <input type="email" className="form-control mb-2" placeholder="Enter your email" />
                  <button type="submit" className="btn btn-primary w-100">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <FooterBottomShape className={`${styles.footerShape}`} />
      </div>
    </footer>
  );
}

export default Footer;