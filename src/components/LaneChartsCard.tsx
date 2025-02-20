import React from "react";
import { LaneChart } from "./LaneChart";

const LaneChartsCard = () => {
  return (
    <div className="lg:h-56 bg-card w-full rounded-xl border-2 border-card-outline text-secondary overflow-hidden">
      <div className="md:flex items-center w-full lg:-ml-5">
        <div className="lg:flex-1 lg:border-r lg:border-card-outline last:border-r-0">
          <LaneChart title="Lane 1" />
        </div>
        <div className="lg:flex-1 lg:border-r lg:border-card-outline last:border-r-0">
          <LaneChart title="Lane 2" />
        </div>
        <div className="lg:flex-1">
          <LaneChart title="Lane 3" />
        </div>
      </div>
    </div>
  );
};

export default LaneChartsCard;
