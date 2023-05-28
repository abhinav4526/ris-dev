import { useEffect, useState } from "react";
import { RestaurantCard } from "./restaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  const [dataList, setDataList] = useState(resList);
  const [dataListSearch, setDataListSearch] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setDataList(json?.data?.cards[2]?.data?.data?.cards);
  };
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
        <input
          id="filter-search-bar"
          type="text"
          className="filter-search-bar"
          placeholder="Search..."
          value={dataListSearch}
          onChange={(e) => {
            setDataListSearch(e.target.value);
          }}
        />
        <button
          className="filter-search-btn"
          onClick={() => {
            if (dataListSearch.length !== 0) {
              setDataList(
                dataList.filter((res) =>
                  res.data.name
                    .toLowerCase()
                    .includes(dataListSearch.toLowerCase())
                )
              );
            }
          }}
        >
          Search
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
