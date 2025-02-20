import React from "react";

const TurningActivity = () => {
  return (
    <div className="bg-card border-2 border-card-outline rounded-xl w-full lg:h-[525px] p-4">
      <div className="flex flex-col gap-8 items-center text-secondary">
        <span className="text-lg font-bold">Turning Activity</span>

        <div className="flex flex-col gap-4 items-center">
          <span className="font-medium">Most people are turning</span>
          <img src="icon.svg" alt="" />
          <span>on</span>
          <span>West Smith Road</span>
          <span className="border-b-2 border-card-outline w-full" />
          <span>With an average of</span>

          <div className="flex items-center gap-5">
            <span className="text-[70px] font-bold text-[#BCFF34]">17</span>
            <span>Every Minute</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurningActivity;
