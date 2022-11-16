import React from "react";
import { faker } from "@faker-js/faker";
import Card from "../components/cards/Card";

async function getLatestDeals() {
  const customers = [...new Array(4)].map((_, id) => {
    return {
      id,
      name: faker.commerce.productName(),
      location: faker.address.city(),
      price: parseFloat(faker.commerce.price()),
      image: faker.image.business(),
    };
  });

  return customers;
}
const Cards = async () => {
  const latestDeals = await getLatestDeals();

  return (
    <div>
      <div className="flex flex-col gap-y-10">
        {latestDeals.map((deal) => (
          <Card
            name={deal.name}
            key={deal.id}
            price={deal.price}
            location={deal.location}
            image={deal.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
