import {
  UserCircleIcon,
  HomeIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import React from "react";

const BottomTabs = () => {
  return (
    <div className="absolute bottom-0 bg-white w-full h-16 border-t shadow-2xl">
      <div className=" h-full grid grid-cols-3 justify-items-center content-center">
        <div className="flex flex-col items-center">
          <HomeIcon className="w-5 text-primary-600" />
          <span>Explora</span>
        </div>
        <div className="flex flex-col items-center">
          <HeartIcon className="w-5 text-primary-600" />
          <span>Favoritos</span>
        </div>
        <div className="flex flex-col items-center">
          <UserCircleIcon className="w-5 text-primary-600" />
          <span>Session</span>
        </div>
      </div>
    </div>
  );
};

export default BottomTabs;
