import React from "react";
import { Spinner as SpinnerComponent } from "reactstrap";

const Spinner = () => {
  return (
    <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
      <SpinnerComponent />
    </div>
  );
};

export default Spinner;
