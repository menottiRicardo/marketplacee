import React from "react";
import { Category } from "./Category";

const getCategories = async () => {
  return [
    { categoryName: "Sedanes", id: "autos" },
    { categoryName: "PickUps", id: "casas" },
    { categoryName: "SUVs", id: "suvs" },
    { categoryName: "Motos", id: "motos" },
    { categoryName: "Vans", id: "vans" },
    { categoryName: "Convertibles", id: "convertible" },
    { categoryName: "Buses", id: "buses" },
  ];
};
const CategoriesTab = async () => {
  const categories = await getCategories();
  return (
    <div className="flex overflow-y-auto gap-x-6 mb-2">
      {categories.map((category) => (
        <Category key={category.id} name={category.categoryName} />
      ))}
    </div>
  );
};

export default CategoriesTab;
