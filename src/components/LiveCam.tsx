import React from "react";
import { Button } from "./ui/button";
import { CircleChevronRight } from "lucide-react";

const LiveCam = () => {
  return (
    <div className="flex flex-col gap-4 h-80 bg-card w-full rounded-xl p-6 border-2 border-card-outline text-secondary">
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">Live Cam View</span>
        <a href="#">
          <Button className="bg-secondary text-primary text-lg px-5 hover:bg-hoverbg hover:text-white">
            Next Cam
            <CircleChevronRight className="bg-hoverbg rounded-full text-white !size-5" />
          </Button>
        </a>
      </div>
      <div className="h-52 w-full overflow-hidden rounded-xl">
        <img src="/camview.png" alt="" className="h-full w-full object-fill" />
      </div>
    </div>
  );
};

export default LiveCam;
