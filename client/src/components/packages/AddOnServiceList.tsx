import { TModuleStyle } from "@/types";
import React from "react";

interface IAddOnServiceListProps{
    styles: TModuleStyle;
}

function AddOnServiceList({styles}: IAddOnServiceListProps) {
  return (
    <div className="tab-pane fade" id="addons" role="tabpanel">
      <div className="row g-4">
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h4 className="mb-0">
                <i className="bi bi-droplet-fill text-primary me-2"></i> Paint
                Enhancement & Protection
              </h4>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-primary bg-opacity-10 text-primary">
                          <i className="bi bi-brush fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">
                            Single-Stage Paint Correction
                          </h5>
                          <p className="text-muted small mb-2">
                            Light swirl & scratch removal
                          </p>
                          <span className="badge bg-primary price-badge">
                            $200-$350
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-primary bg-opacity-10 text-primary">
                          <i className="bi bi-brush-fill fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Multi-Stage Paint Correction</h5>
                          <p className="text-muted small mb-2">
                            Deep swirl & scratch removal
                          </p>
                          <span className="badge bg-primary price-badge">
                            $400-$600
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-primary bg-opacity-10 text-primary">
                          <i className="bi bi-gem fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">6-Month Ceramic Coating</h5>
                          <p className="text-muted small mb-2">
                            Includes paint decontamination
                          </p>
                          <span className="badge bg-primary price-badge">
                            $150-$200
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-primary bg-opacity-10 text-primary">
                          <i className="bi bi-gem-fill fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">5-Year Ceramic Coating</h5>
                          <p className="text-muted small mb-2">
                            Premium long-term protection
                          </p>
                          <span className="badge bg-primary price-badge">
                            $900-$1,000
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h4 className="mb-0">
                <i className="bi bi-car-front-fill text-primary me-2"></i>{" "}
                Interior Upgrades
              </h4>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6 col-lg-4">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-success bg-opacity-10 text-success">
                          <i className="bi bi-droplet fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Deep Stain Removal</h5>
                          <p className="text-muted small mb-2">
                            Tough stain treatment
                          </p>
                          <span className="badge bg-primary price-badge">
                            $50-$100
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-success bg-opacity-10 text-success">
                          <i className="bi bi-cloud-haze fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Odor Neutralization</h5>
                          <p className="text-muted small mb-2">
                            Ozone treatment
                          </p>
                          <span className="badge bg-primary price-badge">
                            $100
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-success bg-opacity-10 text-success">
                          <i className="bi bi-sunglasses fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Leather Deep Cleaning</h5>
                          <p className="text-muted small mb-2">
                            Cleaning & conditioning
                          </p>
                          <span className="badge bg-primary price-badge">
                            $75-$100
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-success bg-opacity-10 text-success">
                          <i className="bi bi-shield-shaded fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Fabric Protection</h5>
                          <p className="text-muted small mb-2">
                            Scotchgard application
                          </p>
                          <span className="badge bg-primary price-badge">
                            $50
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h4 className="mb-0">
                <i className="bi bi-sun-fill text-primary me-2"></i> Exterior
                Add-Ons
              </h4>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6 col-lg-4">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-warning bg-opacity-10 text-warning">
                          <i className="bi bi-water fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Hydrophobic Glass Coating</h5>
                          <p className="text-muted small mb-2">
                            Water-repellent treatment
                          </p>
                          <span className="badge bg-primary price-badge">
                            $30
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-warning bg-opacity-10 text-warning">
                          <i className="bi bi-palette fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Trim & Plastic Restoration</h5>
                          <p className="text-muted small mb-2">
                            Revitalizes faded trim
                          </p>
                          <span className="badge bg-primary price-badge">
                            $60
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-warning bg-opacity-10 text-warning">
                          <i className="bi bi-gear-fill fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Engine Bay Cleaning</h5>
                          <p className="text-muted small mb-2">
                            Deep cleaning & dressing
                          </p>
                          <span className="badge bg-primary price-badge">
                            $75
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-warning bg-opacity-10 text-warning">
                          <i className="bi bi-headlight fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Headlight Restoration</h5>
                          <p className="text-muted small mb-2">
                            Restoration + sealant
                          </p>
                          <span className="badge bg-primary price-badge">
                            $60
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h4 className="mb-0">
                <i className="bi bi-star-fill text-primary me-2"></i> Specialty
                Services
              </h4>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6 col-lg-4">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-danger bg-opacity-10 text-danger">
                          <i className="bi bi-bug-fill fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Pet Hair & Sand Removal</h5>
                          <p className="text-muted small mb-2">
                            Deep clean for pet owners
                          </p>
                          <span className="badge bg-primary price-badge">
                            $75-$100
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-danger bg-opacity-10 text-danger">
                          <i className="bi bi-tree-fill fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Road Tar & Sap Removal</h5>
                          <p className="text-muted small mb-2">
                            Specialized cleaning
                          </p>
                          <span className="badge bg-primary price-badge">
                            $50-$75
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="card addon-card border h-100">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="service-icon bg-danger bg-opacity-10 text-danger">
                          <i className="bi bi-truck fs-4"></i>
                        </div>
                        <div>
                          <h5 className="mb-1">Fleet/Commercial Services</h5>
                          <p className="text-muted small mb-2">
                            Multiple vehicle discounts
                          </p>
                          <span className="badge bg-secondary price-badge">
                            Call for pricing
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOnServiceList;
