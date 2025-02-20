import React from "react";
import { SensorChart } from "./SensorChart";
import SensorHealth from "./SensorHealth";

const MiddleBottomLower = () => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-6 lg:h-72 overflow-hidden">
      <div className="bg-card border-2 border-card-outline rounded-xl w-full">
        <SensorHealth />
      </div>
      <div className="bg-card border-2 border-card-outline rounded-xl w-full p-2 overflow-hidden">
        <SensorChart />
      </div>
    </div>
  );
};

export default MiddleBottomLower;
