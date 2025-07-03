import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]);
  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resId);
    const data = await response.json();
    setResInfo(data?.data?.cards[2]?.card?.card?.info);
    setMenu(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };

  return [resInfo, menu];
};

export default useRestaurantMenu;
