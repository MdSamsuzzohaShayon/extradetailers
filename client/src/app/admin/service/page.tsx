import { servicesOptions } from "@/app/_requests/services";
import styles from "./service.module.scss";
import ServiceAdd from "@/components/service/ServiceAdd";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import ServiceList from "@/components/service/ServiceList";

async function ServicePage() {

  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(servicesOptions);

  return (
    <div className={styles.serviceContainer}>
      <h1 className={styles.title}>Manage Services</h1>
      
      {/* Create / Edit Form */}
      <ServiceAdd styles={styles} />
      
      {/* Service List */}
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ServiceList styles={styles} />
      </HydrationBoundary>
      
    </div>
  );
}

export default ServicePage;