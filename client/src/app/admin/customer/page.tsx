import { useUsersOptions } from "@/app/_requests/users";
import styles from "./customer.module.scss";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { EUserRole } from "@/types";
import CustomerMain from "@/components/customer/CustomerMain";

async function CustomerPage() {

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(useUsersOptions({ role: EUserRole.DETAILER }));

  return (
    <div className={styles.customerContainer}>
      <h1 className={styles.title}>Manage Customers</h1>

      <ul>
        <ol>List all customers</ol>
        <ol>Assign a customer to specific job/booking</ol>
        <ol>List of all requested</ol>
        <ol>Each booking/job must have a location</ol>
        <ol>(In customer dashboard) Customer can chat, customer can request to cancel, a notification panel</ol>
      </ul>
      
      {/* Create / Edit Form */}
      
      {/* Customer List */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CustomerMain styles={styles} />
      </HydrationBoundary>
      
    </div>
  );
}

export default CustomerPage;