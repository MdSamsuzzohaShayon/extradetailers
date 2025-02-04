import { TModuleStyle } from "@/types";
import React from "react";
import { FaArrowRight, FaRegCalendarAlt, FaCar, FaShower, FaCheckCircle } from "react-icons/fa";

interface IProcessProps{
    styles: TModuleStyle;
}

function Process({styles}: IProcessProps) {
  return (
    <div className="container text-center my-5">
      {/* Heading */}
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8">
          <p className="text-uppercase text-primary fw-bold">Our Process</p>
          <h2 className="fw-bold">We Know Your Time is Valuable</h2>
        </div>
      </div>

      {/* Process Steps */}
      <div className="d-flex flex-wrap justify-content-around align-items-center gap-4">
        {/* Step 1 */}
        <div className="d-flex flex-column align-items-center">
          <div className={`${styles.iconBox} fs-1 rounded-circle bg-primary text-white d-flex justify-content-center align-items-center`}>
            <FaRegCalendarAlt />
          </div>
          <h5 className="mt-3">1. Booking</h5>
        </div>

        <div className={`${styles.arrowBox} rounded-circle border border-white d-flex justify-content-center align-items-center`} >
        <FaArrowRight className="text-white fs-3" />
        </div>

        {/* Step 2 */}
        <div className="d-flex flex-column align-items-center">
          <div className={`${styles.iconBox} fs-1 rounded-circle bg-primary text-white d-flex justify-content-center align-items-center`}>
            <FaCar />
          </div>
          <h5 className="mt-3">2. Car Drop-off</h5>
        </div>

        <div className={`${styles.arrowBox} rounded-circle border border-white d-flex justify-content-center align-items-center`} >
        <FaArrowRight className="text-white fs-3" />
        </div>

        {/* Step 3 */}
        <div className="d-flex flex-column align-items-center">
          <div className={`${styles.iconBox} fs-1 rounded-circle bg-primary text-white d-flex justify-content-center align-items-center`}>
            <FaShower />
          </div>
          <h5 className="mt-3">3. Car Wash</h5>
        </div>

        <div className={`${styles.arrowBox} rounded-circle border border-white d-flex justify-content-center align-items-center`} >
        <FaArrowRight className="text-white fs-3" />
        </div>

        {/* Step 4 */}
        <div className="d-flex flex-column align-items-center">
          <div className={`${styles.iconBox} fs-1 rounded-circle bg-success text-white d-flex justify-content-center align-items-center`}>
            <FaCheckCircle />
          </div>
          <h5 className="mt-3">4. Done</h5>
        </div>
      </div>
    </div>
  );
}

export default Process;
