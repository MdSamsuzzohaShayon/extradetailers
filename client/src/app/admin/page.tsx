import React from 'react';
import styles from "./admin.module.scss";

// Reference: https://nextjs.spruko.com/tailwind/app/xintra-ts/preview/dashboard/sales/
// Best Approach: Hybrid (Server Fetch + React Query Hydration)

function AdminPage() {
  return (
    <div className={`${styles.admin}`}>
      Admin layout content
    </div >
  )
}

export default AdminPage;