import Footer from "@/components/layout/Footer";
import React from "react";
import styles from "./packages.module.scss";
import Landing from "@/components/layout/Landing";
import PackageList from "@/components/packages/PackageList";
import { getQueryClient } from "@/lib/get-query-client";
import {
  combinedServicesOptions,
} from "../_requests/services";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import AddOnServiceList from "@/components/packages/AddOnServiceList";

/**
 * Reference -> https://carcareful.peacefulqode.in/our-service/
 * Context like this -> https://aonetheme.com/service-finder-demo4/author/robert-marchel/?demo=style-1
 * Purchase now
 * Reference for services -> https://demoapus1.com/freeio/home-2/
 */

async function PackagesPage() {
  const queryClient = getQueryClient();

  try {
    // Always use await to properly handle errors
    await queryClient.prefetchQuery(combinedServicesOptions);
  } catch (error) {
    console.error("Prefetch error:", error);
    // The error will automatically propagate to error.tsx
    throw error;
  }

  return (
    <>
      <main>
        {/* <ul>
          <li>A filter in the left side</li>
          <li>Showing packages in E-Commerce type</li>
        </ul> */}
        <section className={styles.landing}>
          <Landing title="Packages" />
        </section>
        <section className="section-pt">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold text-primary">
                Premium Car Detailing Services
              </h2>
              <p className="lead text-muted">
                Restore your vehicle's showroom shine with our expert care
              </p>
              <div className="d-flex justify-content-center gap-3">
                <span className="badge bg-primary rounded-pill px-3 py-2">
                  <i className="bi bi-shield-check me-1"></i> Certified
                  Technicians
                </span>
                <span className="badge bg-success rounded-pill px-3 py-2">
                  <i className="bi bi-star-fill me-1"></i> 5-Star Rated
                </span>
                <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                  <i className="bi bi-award-fill me-1"></i> Eco-Friendly
                </span>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-8 order-lg-1 order-2">
                {/* Toggle menu start  */}
                <ul
                  className="nav nav-pills mb-4 justify-content-center"
                  id="servicesTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="packages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#packages"
                      type="button"
                      role="tab"
                    >
                      Main Packages
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="addons-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#addons"
                      type="button"
                      role="tab"
                    >
                      Add-On Services
                    </button>
                  </li>
                </ul>
                {/* Toggle menu end */}

                <div className="tab-content" id="servicesTabContent">
                  <HydrationBoundary state={dehydrate(queryClient)}>
                    <PackageList styles={styles} />
                    <AddOnServiceList styles={styles} />
                  </HydrationBoundary>
                </div>
              </div>

              <div className="col-lg-4 order-lg-2 order-1">
                <div className="sticky-sidebar">
                  <div className="card border-0 shadow-sm mb-4">
                    <div className="card-header bg-primary text-white">
                      <h5 className="mb-0">
                        <i className="bi bi-cart-check me-2"></i> Your Selection
                      </h5>
                    </div>
                    <div className="card-body">
                      <div id="selectedPackage" className="mb-3">
                        <p className="text-muted mb-2">
                          No package selected yet
                        </p>
                      </div>

                      <div id="selectedAddons" className="mb-3">
                        <h6 className="fw-bold mb-2">Add-On Services</h6>
                        <div id="addonsList" className="mb-2">
                          <p className="text-muted small mb-1">
                            No add-ons selected
                          </p>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span>Subtotal:</span>
                        <strong id="subtotal">$0.00</strong>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span>Tax (8%):</span>
                        <strong id="tax">$0.00</strong>
                      </div>
                      <div className="d-flex justify-content-between align-items-center fw-bold fs-5 border-top pt-2">
                        <span>Total:</span>
                        <span id="total" className="text-primary">
                          $0.00
                        </span>
                      </div>

                      <button
                        className="btn btn-primary w-100 mt-3"
                        disabled
                        id="checkoutBtn"
                      >
                        Proceed to Booking
                      </button>
                    </div>
                  </div>

                  <div className="card border-0 shadow-sm">
                    <img
                      src="/imgs/car-cleaning-discounts.jpg"
                      className="card-img-top"
                      alt="Car cleaning discounts"
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title fw-bold text-primary">
                        Special Discount
                      </h5>
                      <p className="card-text">
                        Get 10% off when you book 2 or more add-on services!
                      </p>

                      <div className="bg-light p-3 rounded-3 mb-3">
                        <i className="bi bi-telephone-fill text-primary fs-3 mb-2"></i>
                        <h5 className="fw-bold mb-1">Need Help?</h5>
                        <p className="text-muted small mb-2">
                          Our detailing experts are standing by
                        </p>
                        <a
                          href="tel:9876543210"
                          className="btn btn-outline-primary w-100"
                        >
                          <i className="bi bi-telephone me-2"></i> 987 654 3210
                        </a>
                      </div>

                      <div className="alert alert-success">
                        <h6 className="alert-heading fw-bold">
                          <i className="bi bi-lightning-fill me-2"></i> Today's
                          Special
                        </h6>
                        <p className="small mb-0">
                          Free interior vacuum with any exterior package!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-pt"></section>
      </main>
      <Footer />
    </>
  );
}

export default PackagesPage;
