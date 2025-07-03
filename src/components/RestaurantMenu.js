import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, menu] = useRestaurantMenu(resId);

  if (resInfo === null || menu?.length === 0) {
    return <Shimmer />;
  }

  const { name, areaName, costForTwo, cuisines, avgRating } = resInfo;

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <p>{areaName}</p>
      <p>{costForTwo}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}</p>

      <div>
        <h2>Menu</h2>
        {menu?.map((item) => {
          const { name, price, defaultPrice } = item.card?.info;
          return (
            <div key={item.card?.info?.id}>
              <p>
                {name} - ₹{(price || defaultPrice) / 100}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
