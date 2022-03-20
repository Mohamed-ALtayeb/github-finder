import React from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
  return (
    <div className="mt-20 w-100">
      <img
        width={180}
        className="mx-auto text-center"
        alt="Loading ... "
        src={spinner}
      />
    </div>
  );
};

export default Spinner;
