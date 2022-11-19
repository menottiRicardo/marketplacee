"use client";
import { TruckIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React from "react";

export const Category = ({ name }: { name: string }) => {
  return (
    <div className={`flex flex-col items-center`}>
      <TruckIcon className="w-6"/>
      <h3>{name}</h3>
    </div>
  );
};
