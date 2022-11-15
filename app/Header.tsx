import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="px-2 flex items-center pt-2 sm:px-8 xl:px-20 md:pt-4 border-b pb-4 shadow-sm">
      {/* logo */}
      <div className="w-1/5">
        <h1 className="font-medium text-primary-500">LOGO</h1>
      </div>
      {/* search */}

      <div className="w-3/5 flex justify-center">
        <div className="w-full rounded-full border flex justify-between p-2 max-w-xl shadow-md hover:shadow-lg transition-all ease-in">
          <input
            type="text "
            className="bg-transparent ml-2 w-[87%] focus:outline-none"
          />
          <MagnifyingGlassCircleIcon className="w-5 text-primary-500" />
        </div>
      </div>
      {/* user */}
      <div className="w-1/5 bg-slate-50 flex justify-end">
        <h2 className="hidden sm:inline mr-2 cursor-pointer">Vende ya</h2>
        <UserCircleIcon className="w-5 text-primary-500 sm:w-7 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
