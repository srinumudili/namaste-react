import RestaurantCardContainer from "./RestaurantCardContainer";
import { useEffect, useState } from "react";
import ShimmerList from "./ShimmerList";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searhTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.459107&lng=78.4213242&is-seo-homepage-enabled=true"
    );
    const restaurantData = await response.json();
    setListOfRestaurants(
      restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurants(
      restaurantData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const handleFilter = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (restaruant) => restaruant.info.avgRating > 4
    );

    setFilteredListOfRestaurants(filteredRestaurants);
  };

  const handleSearchClick = () => {
    const filteredData = listOfRestaurants.filter((restaruant) =>
      restaruant.info.name.toLowerCase().includes(searhTerm.toLowerCase())
    );

    setFilteredListOfRestaurants(filteredData);
  };

  return listOfRestaurants.length === 0 ? (
    <ShimmerList />
  ) : (
    <main className="main-container">
      <div className="filter">
        <div>
          <input
            type="text"
            value={searhTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurant
        </button>
      </div>
      <RestaurantCardContainer listOfRestaurants={filteredListOfRestaurants} />
    </main>
  );
};

export default Body;
