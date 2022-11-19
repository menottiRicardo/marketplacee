import React from "react";

const page = async ({ params: { id } }:any) => {
  console.log("test", id);
  return <div>page</div>;
};

export default page;
