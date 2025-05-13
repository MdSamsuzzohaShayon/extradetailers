import { IService } from "@/types";
import React from "react";

interface IServiceAdd {
  selectedService?: IService | null;
}

function ServiceAdd({
  selectedService,
}: IServiceAdd) {
  return (
    <React.Fragment>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control border-primary"
          name="name"
          id="name"
          placeholder="Name"
          defaultValue={selectedService ? selectedService.title : ""}
          required={!selectedService ? true : false}
        />
      </div>
    </React.Fragment>
  );
}

export default ServiceAdd;
