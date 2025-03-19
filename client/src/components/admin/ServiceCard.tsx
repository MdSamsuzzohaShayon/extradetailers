'use client'

import { IService } from '@/types';
import React from 'react';

interface IServiceCardProps{
    service: IService;
    styles: Record<string, string>;
}

function ServiceCard({service, styles}: IServiceCardProps) {
    const setEditingService= (serviceId: number) => {
        console.log(serviceId);
        
    }
    const handleDelete= (serviceId: number) => {
        console.log(serviceId);
    }
  return (
    <div className={`card ${styles.serviceCard}`} key={service.id}>
            <h5 className="card-header">{service.title}</h5>
            <div className="card-body">
              <h5 className="card-title">{service.title}</h5>
              <p className="card-text">{service.description}</p>
              <button className="btn btn-primary me-2" onClick={() => setEditingService(service.id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => handleDelete(service.id)}>Delete</button>
            </div>
          </div>
  )
}

export default ServiceCard;