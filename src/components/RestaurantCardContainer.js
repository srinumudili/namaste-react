import RestaurantCard from "./RestaurantCard";

const RestaurantCardContainer = ({ listOfRestaurants }) => {
  return (
    <div className="restaurant-card-container">
      {listOfRestaurants.map((restro) => {
        return <RestaurantCard key={restro.info.id} resData={restro} />;
      })}
    </div>
  );
};

export default RestaurantCardContainer;
