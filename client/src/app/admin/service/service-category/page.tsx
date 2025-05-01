import React from 'react'

function ServiceCategoryPage() {
  return (
    <div>ServiceCategoryPage</div>
  )
}

export default ServiceCategoryPage

// import styles from "./service-category.module.scss";
// import { getQueryClient } from "@/lib/get-query-client";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import { vehicleTypesOptions } from "@/app/_requests/vehicle-types";
// import ServiceCategoryMain from "@/components/service/vehicle-type/ServiceCategoryMain";

// async function ServiceCategoryPage() {

//   const queryClient = getQueryClient()

//   await  queryClient.prefetchQuery(vehicleTypesOptions);

//   return (
//     <div className={styles.serviceContainer}>
//       <h1 className={styles.title}>Manage Vehicle Type</h1>      
//       {/* Service List */}
//       <HydrationBoundary state={dehydrate(queryClient)}>
//         <ServiceCategoryMain styles={styles} />
//       </HydrationBoundary>
      
//     </div>
//   );
// }

// export default ServiceCategoryPage;