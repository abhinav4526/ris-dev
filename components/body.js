import { useState } from "react";
import { RestaurantCard } from "./restaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  const [dataList, setDataList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setDataList(dataList.filter((res) => res.data.avgRating > 3));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {dataList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} dataInstance={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
