import React from 'react';
import AdminDashboardLayout from '@/components/layout/AdminDashboardLayout';
import { IMenuItem } from '@/types';

const menuList: IMenuItem[] = [
  {
    id: 1,
    text: "Dashboard",
    link: "/dashboard"
  },
  {
    id: 2,
    text: "Bookings",
    link: "/dashboard/bookings"
  }
];


function DashboardLayout({children}: React.PropsWithChildren) {
  return (
    <React.Fragment>
      <AdminDashboardLayout title='Dashboard' menuList={menuList} >{children}</AdminDashboardLayout>
    </React.Fragment>
  )
}

export default DashboardLayout;