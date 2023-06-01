import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RestaurantCard } from "./restaurantCard";
import Shimmer from "./shimmer";

const Body = () => {
  const [dataList, setDataList] = useState([]);
  const [filteredDataList, setFiteredDataList] = useState([]);
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
    setFiteredDataList(json?.data?.cards[2]?.data?.data?.cards);
  };

  return dataList.length === 0 ? (
    <Shimmer />
  ) : (
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
              setFiteredDataList(
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
        <button
          className="filter-reset-btn"
          onClick={() => {
            setFiteredDataList(dataList);
            setDataListSearch("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {filteredDataList.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.data.id}>
            <RestaurantCard
              key={restaurant.data.id}
              dataInstance={restaurant}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
