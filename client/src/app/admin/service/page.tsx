import styles from "./service.module.scss";
import { getServices,  } from '@/app/_requests/services';
import ServiceAdd from "@/components/admin/ServiceAdd";
import ServiceCard from "@/components/admin/ServiceCard";
import { IService } from '@/types';

async function ServicePage() {
  const allServices = await getServices();

  return (
    <div className={styles.serviceContainer}>
      <h1 className={styles.title}>Manage Services</h1>
      
      {/* Create / Edit Form */}
      <ServiceAdd styles={styles} />
      
      {/* Service List */}
      <div className="d-flex flex-wrap gap-2 mt-3">
        {allServices.map((service: IService) => (
          <ServiceCard key={service.id} service={service} styles={styles} />
        ))}
      </div>
    </div>
  );
}

export default ServicePage;