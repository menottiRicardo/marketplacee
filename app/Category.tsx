"use client";
import { useRouter } from "next/router";
import React from "react";

export const Category = ({ name }: { name: string }) => {
  return (
    <div className={`w-10`}>
      <h3>{name}</h3>
    </div>
  );
};
