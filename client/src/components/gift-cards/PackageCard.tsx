import { IProduct, TModuleStyle } from '@/types';
import React from 'react';

interface IPackageCardProps {
    styles: TModuleStyle;
    product: IProduct;
    index: number;
    onSelect: (product: IProduct) => void;
}

function PackageCard({ styles, product, index, onSelect }: IPackageCardProps) {
    return (
        <li
            className={`${styles.packageCard} shadow p-3 d-flex justify-content-between align-items-center ${index % 2 !== 0 ? "bg-primary text-white" : ""}`}
            key={product.id}
        >
            <div className="w-100 d-flex align-items-center">
                <div className={`${styles.pricingBox}`}>
                    <h4 className='fw-bold'>{product.title}</h4>
                    <p>
                        <span className='display-6 fw-bold text-uppercase'>{product.price}</span>
                        <span className={`${index % 2 !== 0 ? "text-white" : "text-primary"}`}> / {product.time}</span>
                    </p>
                </div>
                <div className={`${styles.descriptionBox}`}>
                    <p>{product.desc}</p>
                </div>
                <div className={`${styles.btnBox} d-flex justify-content-center align-items-center gap-3`}>
                    <button
                        className={`btn ${index % 2 !== 0 ? "btn-light" : "btn-primary"}`}
                        onClick={() => onSelect(product)}
                    >
                        Select
                    </button>
                </div>
            </div>
        </li>
    );
}

export default PackageCard;