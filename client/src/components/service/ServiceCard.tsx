'use client'

import { IService } from '@/types';
import React from 'react';

interface IServiceCardProps {
  service: IService;
  styles: Record<string, string>;
  handleDeleteService: (e: React.SyntheticEvent, serviceId: number) => void;
}

function ServiceCard({ service, styles, handleDeleteService }: IServiceCardProps) {
  const setEditingService = (serviceId: number) => {
    console.log(serviceId);

  }
  // Delete service need to work properly with mutation
  // Create a next.js provider to handle error/display error in both server component and client component. Is it possible?
  // Error handling - https://nextjs.org/docs/app/building-your-application/routing/error-handling

  return (
    <div className={`card ${styles.serviceCard}`} key={service.id}>
      <h5 className="card-header">{service.title}</h5>
      <div className="card-body">
        <h5 className="card-title">{service.title}</h5>
        <p className="card-text">{service.description}</p>
        <button className="btn btn-primary me-2" onClick={() => setEditingService(service.id)}>Edit</button>
        <button className="btn btn-danger" onClick={(e) => handleDeleteService(e, service.id)}>Delete</button>
      </div>
    </div>
  )
}

export default ServiceCard;