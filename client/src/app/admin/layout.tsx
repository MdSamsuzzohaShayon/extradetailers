import React from 'react';
import styles from "./admin.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/admin/Navbar';

function AdminLayout({children}: React.PropsWithChildren) {
  return (
    <div className={`${styles.adminLayout} d-flex flex-nowrap`}>
      {/* Create admin panel to handle user management
        Add user with different kinds of permission
        Customer, detailer etc */}

      {/* Left side start  */}
      <div className={`${styles.leftSide} d-flex flex-column flex-shrink-0 p-3 text-bg-dark`} >
        <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" >
          <Image height={50} width={50} src="/logo.png" alt="Extradetailer-logo"  />
        </Link>
        <hr />
       <Navbar />
        <hr />
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <Image src="/logo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
      {/* Left side end  */}

      {/* Right side start  */}
      <div className={`${styles.rightSide} flex-grow-1 p-4 bg-light overflow-auto`}>
        {children}
      </div>
      {/* Right side end  */}
    </div >
  )
}

export default AdminLayout;