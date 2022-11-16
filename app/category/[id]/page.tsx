import React from "react";

const page = async ({ params: { id } }) => {
  console.log("test", id);
  return <div>page</div>;
};

export default page;
