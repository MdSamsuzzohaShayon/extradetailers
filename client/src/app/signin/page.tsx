import React from 'react';
import styles from "./signin.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import { MdLogin } from 'react-icons/md';
import HeroBackground from '@/components/svg/HeroBackground';

/**
 * Reference -> https://dribbble.com/shots/24671160-Fillianta-Sign-Up
 */

function SigninPage() {
  return (
    <main className={`${styles.signin || ""} w-100 d-flex align-items-center`}>
      <div className="d-flex w-100 h-100">
        <div className="col col-md-5 d-flex flex-column justify-content-center">
          <div className={`${styles.contentBox} shadow p-3 mb-5 bg-body-tertiary`}>
            <Link className="navbar-brand mb-4" href="/">
              <Image
                height={100}
                width={100}
                alt="extra-detailers-logo"
                src="/logo.png"
                className={styles.headerLogo}
              />
            </Link>
            <h2 className="mb-3">Get Started</h2>
            <p className="mb-4">Welcome to Extradetailer - Let&apos;s create your account </p>
            <hr className="mb-4 border border-primary" />
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control border-primary" id="email" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control border-primary" id="password" placeholder="Your Password" required />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3"> Login <MdLogin /></button>
              <p className="text-center mb-3">Don&apos;t have an account? <Link href="/signup">Sign up</Link></p>
              <p className="text-center mb-3">Password forgotten? <Link href="/reset-password">Reset</Link></p>
            </form>
          </div>
        </div>
        <div className="col-md-7 d-none d-md-block position-relative" >
          <div className={`${styles.signinCar} img-wrapper`} style={{ backgroundImage: "url(/imgs/signin-car.jpg)" }}>
            <div className="position-absolute top-0 left-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{zIndex: 1}}>
              <h1 className={`${styles.heading} display-4 fw-bold text-start text-white  text-capitalize`}>From booking to <br /> <span className='text-primary'>a brilliant shine—your</span> <br /><span className='ms-5'>car’s transformation</span> <br /> <span className='ms-5'>starts here!</span> </h1>
            </div>
            <div className="position-absolute top-0 left-0 w-100 h-100 overflow-hidden">
              <HeroBackground />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SigninPage;