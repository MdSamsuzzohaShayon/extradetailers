'use client';

import { IMenuItem } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface INavbarProps{
    className: string;
    title: string;
    menuList: IMenuItem[];
}

function Navbar({className, title, menuList}: INavbarProps) {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path ? "active" : "text-white";

    // admin, admin/bookings, admin/services, admin/customers

    return (
        <nav className={`d-flex flex-column bg-dark text-white ${className}`}>
            <h4 className="mb-3 px-3">{title}</h4>
            <ul className="nav nav-pills flex-column mb-auto">
                {menuList.map((item)=> (<li key={item.id} className="nav-item">
                    <Link href={item.link} className={`nav-link ${isActive(item.link)}`}>
                        {item.text}
                    </Link>
                </li>))}
                {/* <li className="nav-item">
                    <Link href="/admin" className={`nav-link ${isActive("/admin")}`}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/admin/booking" className={`nav-link ${isActive("/admin/booking")}`}>
                        Bookings
                    </Link>
                    <ul className="nav flex-column ms-3">
                        <li className="nav-item">
                            <Link href="/admin/booking/create" className="nav-link text-white">Create</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admin/booking/list" className="nav-link text-white">List</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admin/booking/update" className="nav-link text-white">Update</Link>
                        </li>
                    </ul>
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
                </li> */}
            </ul>
        </nav>
    );
}

export default Navbar;
