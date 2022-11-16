import Card from "../components/cards/Card";
import LatestDeals from "./Cars";
import CategoriesTab from "./CategoriesTab";

export default function Home() {
  return (
    <div>
      <CategoriesTab />
      {/* @ts-ignore */}
      <LatestDeals />
    </div>
  );
}
