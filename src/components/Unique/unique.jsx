import React from "react";
import LatestData from "../../data/latestData.json";
function Unique() {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl mx-auto ">Latest Items</h1>
          <p className="mt-3 text-sm">
            Explore our collection of unique and thoughtful gifts. Perfect for
            every occasion and every special someone.
          </p>
        </div>
        <a href="/latestitem">
          {" "}
          <button className="text-lg cursor-pointer bg-gray-900 text-white rounded-md w-28  text-center h-12">
            View All
          </button>
        </a>
      </div>
      <div className="flex mt-20 gap-6 justify-center">
        {LatestData
          ? LatestData.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={item.images}
                    alt="cart"
                    className="w-72 h-64 shadow-xl rounded-md "
                  />
                  <h1 className="text-xl mt-5">{item.name}</h1>
                </div>
              );
            })
          : "loading....."}
      </div>
    </>
  );
}

export default Unique;
