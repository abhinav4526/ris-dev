import { RestaurantCard } from "./restaurantCard";
import { dataList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {dataList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} dataInstance={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
