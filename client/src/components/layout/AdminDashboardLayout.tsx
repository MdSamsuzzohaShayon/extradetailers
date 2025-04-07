import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '../admin/Navbar';
import UserMenu from '../admin/UserMenu';
import { IMenuItem } from '@/types';

interface IAdminDashboardLayoutProps extends React.PropsWithChildren {
  title: string;
  menuList: IMenuItem[];
}

function AdminDashboardLayout({ children, title, menuList }: IAdminDashboardLayoutProps) {
  return (
    <div className="d-flex flex-nowrap vh-100 overflow-hidden">
      {/* Left sidebar - fixed width, no scrolling */}
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '280px' }}>
        <Link href="/" className="d-flex align-items-center mb-3 px-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <Image height={50} width={50} src="/logo.png" alt="Extradetailer-logo" />
        </Link>
        <hr className="my-2" />
        <div className="flex-grow-1 overflow-hidden d-flex flex-column">
          <Navbar className="overflow-y-auto" title={title} menuList={menuList} /> {/* Scrollable nav if content overflows */}
          <hr className="my-2" />
          <UserMenu />
        </div>
      </div>

      {/* Main content area - scrollable */}
      <div className="flex-grow-1 d-flex flex-column h-100">
        <div className="p-4 bg-light overflow-auto h-100">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardLayout;