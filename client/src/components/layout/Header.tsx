import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { MdLogin } from 'react-icons/md';
import styles from './header.module.scss';

const menuItems: string[] = ["Service", "About Us", "Gallery", "Gift Cards", "Contact", "FAQ", "Testimonials"];

function Header() {

  const isAuthenticated = false;
  return (
    <nav className={`navbar navbar-expand-lg text-white border-bottom ${styles.navbarContent}`}>
      <div className="container">
        {/* Mobile Menu Toggle Button */}
        <button
          className={`navbar-toggler border text-white`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
          aria-label="Toggle navigation"
        >
          <CiMenuBurger size={24} />
        </button>

        {/* Logo */}
        <Link className="navbar-brand" href="/">
          <Image
            height={100}
            width={100}
            alt="extra-detailers-logo"
            src="/logo.png"
            className={styles.headerLogo}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuItems.map((item, index) => (
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
            {isAuthenticated
              ? (<Link href="/dashboard" className={`btn btn-primary`}>
                Profile <MdLogin />
              </Link>)
              : (<Link href="/signin" className={`btn btn-primary`}>
                Login <MdLogin />
              </Link>)}

          </div>
        </div>
      </div>

      {/* ✅ Offcanvas Mobile Menu */}
      <div
        className={`offcanvas offcanvas-start d-block d-md-none bg-secondary ${styles.mobileMenu}`}
        tabIndex={-1}
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <Link className="navbar-brand" href="/">
            <Image
              height={100}
              width={100}
              alt="extra-detailers-logo"
              src="/logo.png"
              className={styles.headerLogo}
            />
          </Link>
          <button
            type="button"
            className={`btn-close btn-close-white ${styles.closeButton}`}
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            {menuItems.map(
              (item, index) => (
                <li className="nav-item" key={index}>
                  <strong>
                    <Link
                      className="nav-link text-white text-uppercase"
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      data-bs-dismiss="offcanvas"
                    >
                      {item}
                    </Link>
                  </strong>
                </li>
              )
            )}
          </ul>
          <div className="mt-4">
            {isAuthenticated
              ? (<Link href="/dashboard" className={`btn btn-primary w-100`}>
                Profile <MdLogin />
              </Link>)
              : (<Link href="/signin" className={`btn btn-primary w-100`}>
                Login <MdLogin />
              </Link>)}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
