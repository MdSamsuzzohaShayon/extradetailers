import React from 'react';
import AdminDashboardLayout from '@/components/layout/AdminDashboardLayout';
import { IMenuItem } from '@/types';


const menuList: IMenuItem[] = [
  // admin, admin/bookings, admin/services, admin/customers
  {
    id: 1,
    text: "Admin",
    link: "/admin"
  },
  {
    id: 2,
    text: "Bookings",
    link: "/admin/booking"
  },
  {
    id: 3,
    text: "Services",
    link: "/admin/service"
  },
  {
    id: 4,
    text: "Customers",
    link: "/admin/customer"
  },
];

function AdminLayout({children}: React.PropsWithChildren) {
  return (
    <React.Fragment>
      <AdminDashboardLayout title='Admin Panel' menuList={menuList} >
        {children}
      </AdminDashboardLayout>
    </React.Fragment>
  )
}

export default AdminLayout;