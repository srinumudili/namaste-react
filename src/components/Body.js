import RestaurantCardContainer from "./RestaurantCardContainer";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  const handleFilter = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (restaruant) => restaruant.info.avgRating > 4
    );

    setListOfRestaurants(filteredRestaurants);
  };
  return (
    <main className="main-container">
      <div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurant
        </button>
      </div>
      <RestaurantCardContainer listOfRestaurants={listOfRestaurants} />
    </main>
  );
};

export default Body;
