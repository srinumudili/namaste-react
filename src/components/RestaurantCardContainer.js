import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const RestaurantCardContainer = ({ listOfRestaurants }) => {
  return (
    <div className="restaurant-card-container">
      {listOfRestaurants.map((restaruant) => {
        return (
          <Link
            to={`restaurant/${restaruant.info.id}`}
            key={restaruant.info.id}
          >
            <RestaurantCard resData={restaruant.info} />
          </Link>
        );
      })}
    </div>
  );
};

export default RestaurantCardContainer;
