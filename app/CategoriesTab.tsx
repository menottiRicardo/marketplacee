import React from "react";
import { Category } from "./Category";

const getCategories = async () => {
  return [
    { categoryName: "Autos", id: "autos" },
    { categoryName: "Casas", id: "casas" },
  ];
};
const CategoriesTab = async () => {
  const categories = await getCategories();
  return (
    <div className="flex overflow-y-auto gap-x-6">
      {categories.map((category) => (
        <Category key={category.id} name={category.categoryName} />
      ))}
    </div>
  );
};

export default CategoriesTab;
