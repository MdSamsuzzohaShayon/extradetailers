'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path ? "active" : "text-white";

    return (
        <nav className="d-flex flex-column p-3 bg-dark text-white min-vh-100">
            <h4 className="text-center mb-3">Admin Panel</h4>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link href="/admin" className={`nav-link ${isActive("/admin")}`}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/admin/booking" className={`nav-link ${isActive("/admin/booking")}`}>
                        Bookings
                    </Link>
                    {/* <ul className="nav flex-column ms-3">
                        <li className="nav-item">
                            <Link href="/admin/booking/create" className="nav-link text-white">Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admin/booking/list" className="nav-link text-white">List</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admin/booking/update" className="nav-link text-white">Update</Link>
                        </li>
                    </ul> */}
                </li>
                <li className="nav-item">
                    <Link href="/admin/service" className={`nav-link ${isActive("/admin/service")}`}>
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/admin/customer" className={`nav-link ${isActive("/admin/customer")}`}>
                        Customers
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
