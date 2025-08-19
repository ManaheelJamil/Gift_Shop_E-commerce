import React from "react";
import { getAllProducts } from "../../services/productServices";

function TopRatedItems() {
  const products = getAllProducts();

  const topRatedItems = products.slice(0, 5);

  return (
    <div className="mt-20 lg:w-[1440px] mx-5 lg:mx-auto my-20">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl mx-auto">Top Rated Items</h1>
          <p className="mt-3 text-sm">
            Explore our collection of unique and thoughtful gifts. Perfect for
            every occasion and every special someone.
          </p>
        </div>
        <a href="/toprateditem">
          <button className="text-lg cursor-pointer bg-gray-900 text-white rounded-md w-28 text-center h-12">
            View All
          </button>
        </a>
      </div>

      <div className="grid grid-cols-3 mt-20 gap-6 justify-center">
        {topRatedItems.map((item, index) => (
          <div key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="w-72 h-64 shadow-xl rounded-md"
            />
            <h1 className="text-xl mt-5">{item.name}</h1>
            <p className="text-sm text-gray-600">
              ⭐ {item.averageRating.toFixed(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRatedItems;
