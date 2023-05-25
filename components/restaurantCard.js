import { LOGO_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { dataInstance } = props;
  const {
    name,
    avgRating,
    cuisines,
    deliveryTime,
    cloudinaryImageId,
    costForTwo,
    totalRatings,
  } = dataInstance?.data;
  return (
    <div className="res-card">
      <img className="res-image" src={LOGO_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{deliveryTime}</h4>
      <h4>
        {avgRating}({totalRatings})
      </h4>
      <h4>{"₹" + costForTwo / 100 + " FOR TWO"}</h4>
    </div>
  );
};
