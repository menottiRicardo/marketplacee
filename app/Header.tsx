import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <div className="px-2 flex items-center pt-2">
      {/* logo */}
      <div className="w-1/5">
        <h1 className="font-medium text-primary-500">LOGO</h1>
      </div>
      {/* search */}

      <div className=" w-3/5 rounded-full border flex justify-between">
        <input
          type="text "
          className="bg-transparent ml-2 w-[87%] focus:outline-none"
        />

        <MagnifyingGlassCircleIcon className="w-5 text-primary-500" />
      </div>
      {/* user */}
      <div className="w-1/5 bg-slate-50 flex justify-end">
        <UserCircleIcon className="w-5 text-primary-500" />
      </div>
    </div>
  );
};

export default Header;
