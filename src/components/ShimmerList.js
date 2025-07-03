import Shimmer from "./Shimmer";

const ShimmerList = () => {
  return (
    <div className="restaurant-card-container">
      {Array(8)
        .fill("")
        .map((_, i) => (
          <Shimmer key={i} />
        ))}
    </div>
  );
};

export default ShimmerList;
