import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
    avgRating,
  } = resData;

  return (
    <div className="card-container">
      <img
        className="card-image"
        src={`${CDN_URL + cloudinaryImageId}`}
        alt={name}
      />
      <div className="card-info">
        <h3 className="card-title">{name}</h3>
        <p className="card-cuisines">{cuisines.join(", ")}</p>
        <p className="card-location">
          {locality}, {areaName}
        </p>
        <p className="card-cost">{costForTwo}</p>
        <p className={`card-rating ${avgRating >= 4 ? "good" : "average"}`}>
          ⭐ {avgRating}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
