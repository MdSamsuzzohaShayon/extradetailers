import { useUsersOptions } from "@/app/_requests/users";
import styles from "./detailer.module.scss";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import DetailerMain from "@/components/detailer/DetailerMain";
import { EUserRole } from "@/types";

async function DetailerPage() {

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(useUsersOptions({ role: EUserRole.DETAILER }));

  return (
    <div className={styles.detailerContainer}>
      <h1 className={styles.title}>Manage Detailers</h1>

      <ul>
        <ol>List all detailers</ol>
        <ol>Check jobs of a detailer </ol>
        <ol>Assign a detailer to specific job/booking</ol>
        <ol>List of all requested</ol>
        <ol>Each booking/job must have a location</ol>
        <ol>(In detailer dashboard) Detailer can chat, detailer can request to cancel, a notification panel</ol>
      </ul>
      
      {/* Create / Edit Form */}
      
      {/* Detailer List */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <DetailerMain styles={styles} />
      </HydrationBoundary>
      
    </div>
  );
}

export default DetailerPage;