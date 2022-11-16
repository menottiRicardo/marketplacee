import React from "react";
import Image from "next/image";
const Card = ({
  price,
  name,
  location,
  image,
}: {
  price: number;
  name: string;
  location: string;
  image: string;
}) => {
  return (
    <div className="bg-white rounded-md shadow-sm w-full relative">
      <div className="relative h-64 rounded-t-md">
        <Image
          src={image}
          alt={`${name} image`}
          fill={true}
          className="rounded-t-md"
        />
      </div>

      <div className="px-2 mt-2">
        <div className="flex justify-between ">
          <p>{name}</p>
          <p>${price}</p>
        </div>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
