'use client'

import { IService } from '@/types';
import React from 'react';
import ServiceCard from './ServiceCard';
import { DefaultError, useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { deleteServiceOptions, servicesOptions } from '@/app/_requests/services';
// import { useError } from '@/lib/ErrorProvider';


interface ServiceListProps {
    styles: Record<string, string>;
}
function ServiceList({ styles }: ServiceListProps) {
    // const { setError } = useError();
    const queryClient = useQueryClient(); // ✅ React Query Client
    const { data: allServices } = useSuspenseQuery(servicesOptions);
    console.log({allServices});
    

    const deleteServiceMutation = useMutation<unknown, DefaultError, number>(deleteServiceOptions(queryClient));


    const handleDeleteService = async (e: React.SyntheticEvent, serviceId: number) => {
        e.preventDefault();
        await deleteServiceMutation.mutate(serviceId);
    }

    if (deleteServiceMutation.isPending) return <div>Loading</div>

    return (
        <div className="d-flex flex-wrap gap-2 mt-3">
            {/* <button onClick={() => setError('Something went wrong!')}>
                Trigger Error
            </button> */}

            {allServices.map((service: IService) => (
                <ServiceCard key={service.id} service={service} styles={styles} handleDeleteService={handleDeleteService} />
            ))}
        </div>
    )
}

export default ServiceList;