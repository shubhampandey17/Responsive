import React from "react";
import PatientInfo from "./PatientInfo";
import Activity from "./Activity";

function PatientSection() {
  return (
    <div className="flex flex-col p-3 mt-3 w-[300px] bg-aliceblue bg-opacity-[0.47] rounded-md h-fit">
      <div className="mb-3">
        <div className="text-lg font-poppins pl-1 font-medium text-darkslateblue-200 ">
          Patient Info
        </div>
        <PatientInfo />
      </div>
      <Activity />
    </div>
  );
}

export default PatientSection;
