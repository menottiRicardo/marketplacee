import React from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

const MobileHeader = () => {
  return (
    <div className="px-2 flex items-center justify-between pt-2 sm:px-8 xl:px-20 md:pt-4 border-b pb-4 shadow-sm ">
      {/* search */}

      <div className="sm:w-10/12 w-[90%] rounded-full border flex justify-between p-2 shadow-md hover:shadow-lg transition-all ease-in ">
        <MagnifyingGlassCircleIcon className="w-7 text-primary-500" />
        <input
          type="text "
          className="bg-transparent w-full focus:outline-none"
        />
      </div>
      <div className="flex sm:w-2/12 w-[10%] items-center sm:justify-end justify-center">
        <p className="hidden sm:inline mr-1">Filtros</p>
        <AdjustmentsHorizontalIcon className="w-6 text-primary-500 " />
      </div>
    </div>
  );
};

export default MobileHeader;
