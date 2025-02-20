import React from "react";

const PedestrianActivity = () => {
  return (
    <div className="flex flex-col bg-card w-full h-56 items-center justify-center p-4 rounded-xl border-2 border-card-outline text-secondary">
      <span className="text-lg font-bold">Pedestrian Activity</span>
      <div className="flex items-center gap-3">
        <span className="text-[70px] font-bold">17</span>
        <span className="font-semibold">Every Minute</span>
      </div>
      <span className="border-[1px] border-card-outline w-[80%]" />
      <div className="flex items-center gap-2 font-medium">
        <span>With</span>
        <span className="text-[40px] font-bold">2</span>
        <span>Seconds Interval</span>
      </div>
    </div>
  );
};

export default PedestrianActivity;
