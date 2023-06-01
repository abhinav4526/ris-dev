import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import Shimmer from "./shimmer";

const Restaurants = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const jsonData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.528913&lng=73.87441989999999&restaurantId=" +
        id
    );
    const json = await jsonData.json();
    console.log(json);
    setRestaurant(json?.data?.cards);
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurants">
      <img
        src={LOGO_URL + restaurant[0]?.card?.card?.info?.cloudinaryImageId}
      />
    </div>
  );
};

export default Restaurants;
