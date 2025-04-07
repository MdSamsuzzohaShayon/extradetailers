import { IService, TModuleStyle } from '@/types';
import React from 'react';

interface IPackageCardProps {
    styles: TModuleStyle;
    service: IService;
    index: number;
    onSelect: (service: IService) => void;
}

function PackageCard({ styles, service, index, onSelect }: IPackageCardProps) {
    return (
        <li
            className={`${styles.packageCard} shadow p-3 d-flex justify-content-between align-items-center ${index % 2 !== 0 ? "bg-primary text-white" : ""}`}
            key={service.id}
        >
            <div className="w-100 d-flex align-items-center">
                <div className={`${styles.pricingBox}`}>
                    <h4 className='fw-bold'>{service.title}</h4>
                    <p>
                        <span className='display-6 fw-bold text-uppercase'>{service.price}</span>
                        <span className={`${index % 2 !== 0 ? "text-white" : "text-primary"}`}> / {service.time}</span>
                    </p>
                </div>
                <div className={`${styles.descriptionBox}`}>
                    <p>{service.description}</p>
                </div>
                <div className={`${styles.btnBox} d-flex justify-content-center align-items-center gap-3`}>
                    <button
                        className={`btn ${index % 2 !== 0 ? "btn-light" : "btn-primary"}`}
                        onClick={() => onSelect(service)}
                    >
                        Select
                    </button>
                </div>
            </div>
        </li>
    );
}

export default PackageCard;