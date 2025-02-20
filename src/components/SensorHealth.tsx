import { MoveDown, MoveUp } from "lucide-react";
import React from "react";

const SensorHealth = () => {
  return (
    <div className="flex flex-col gap-2 text-secondary items-center py-4">
      <span className="text-lg font-bold">Camera Sensor Health</span>
      <div className="flex flex-col gap-2 border-b-2 border-card-outline">
        <div className="flex items-center gap-4 mb-1">
          <div className="flex flex-col">
            <span className="font-semibold">C1</span>
            <span className="text-xs">Dell Road</span>
          </div>

          {/* Chart  */}
          <div>
            <img src="/cht1.svg" alt="chart1" />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">97%</span>
            <MoveUp className="!size-4 text-green-500" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 border-b-2 border-card-outline">
        <div className="flex items-center gap-4 mb-1">
          <div className="flex flex-col">
            <span className="font-semibold">C2</span>
            <span className="text-xs">Dell Road</span>
          </div>

          {/* Chart  */}
          <div>
            <img src="/cht2.svg" alt="chart1" />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">26%</span>
            <MoveDown className="!size-4 text-red-500" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 mb-1">
          <div className="flex flex-col">
            <span className="font-semibold">C3</span>
            <span className="text-xs">Dell Road</span>
          </div>

          {/* Chart  */}
          <div>
            <img src="/cht1.svg" alt="chart1" />
          </div>

          <div className="flex items-center gap-2">
            <span className="font-semibold">97%</span>
            <MoveUp className="!size-4 text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorHealth;
