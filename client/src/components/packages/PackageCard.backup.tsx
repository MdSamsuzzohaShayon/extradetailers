import {
  IService,
  IServicePopulated,
  IVehicleType,
  TModuleStyle,
} from "@/types";
import React, { useMemo } from "react";

interface IPackageCardProps {
  styles: TModuleStyle;
  service: IServicePopulated;
  vehicleTypes: IVehicleType[];
  index: number;
  onSelect: (service: IServicePopulated) => void;
}

function PackageCard({
  styles,
  service,
  index,
  vehicleTypes,
  onSelect,
}: IPackageCardProps) {
  const vehicleTypeMap: Map<number, IVehicleType> = useMemo(() => {
    if (!vehicleTypes) return new Map();
    return new Map(vehicleTypes.map((vt) => [vt.id, vt]));
  }, [vehicleTypes]);

  return (
    <li
      className={`${
        styles.packageCard
      } shadow p-3 d-flex justify-content-between align-items-center ${
        index % 2 !== 0 ? "bg-primary text-white" : ""
      }`}
      key={service.id}
    >
      <div className="w-100 d-flex align-items-center">
        <div className={`${styles.pricingBox}`}>
          <h4 className="fw-bold">{service.title}</h4>
          <p>
            <span className="fw-bold text-uppercase">
              {service.category.name}
            </span>
          </p>
        </div>
        <div className={`${styles.descriptionBox}`}>
          <p>{service.description}</p>
          <p>
            Min time:{" "}
            {service.estimated_time_min < 60
              ? `${service.estimated_time_min} minutes`
              : `${(service.estimated_time_min / 60).toFixed(2)} hours`}
          </p>
          <p>
            Max time:{" "}
            {service.estimated_time_max < 60
              ? `${service.estimated_time_max} minutes`
              : `${(service.estimated_time_max / 60).toFixed(2)} hours`}
          </p>
          {service.features.length > 0 && (
            <div className="w-100 features">
              <h4 className="fw-bold">Features</h4>
              <ul>
                {service.features.map((feature) => (
                  <li key={feature.id}>{feature.feature_description}</li>
                ))}
              </ul>
            </div>
          )}

          {service.prices.length > 0 && (
            <div className="w-100 features">
              <h4 className="fw-bold">Pricing</h4>
              <ul>
                {service.prices.map((price) => (
                  <li key={price.id}>
                    Vehicle: {vehicleTypeMap.get(price.vehicle_type)?.name},
                    Price: {price.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div
          className={`${styles.btnBox} d-flex justify-content-center align-items-center gap-3`}
        >
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
