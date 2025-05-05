import React from 'react';
import AdminDashboardLayout from '@/components/layout/AdminDashboardLayout';
import styles from './admin.module.scss';




function AdminLayout({children}: React.PropsWithChildren) {
  return (
    <React.Fragment>
      <AdminDashboardLayout title='Admin Panel' styles={styles} >
        {children}
      </AdminDashboardLayout>
    </React.Fragment>
  )
}

export default AdminLayout;