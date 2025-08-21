import React from "react";
import { getAllProducts } from "../../services/productServices";
import { Link } from "react-router-dom";

function TopRatedItems() {
  const products = getAllProducts();

  const topRatedItems = products.slice(0, 5);

  return (
    <div className="mt-20 lg:w-[1250px]  lg:mx-auto my-20">
      <div className="flex justify-between">
        <div>
          <h1 className="lg:text-4xl text-lg mx-auto ">Top Rated Items</h1>
          <p className="mt-3 text-[#444444] text-[12px] lg:text-sm">
            Explore our collection of unique and thoughtful gifts. Perfect for
            every occasion and every special someone.
          </p>
        </div>
        <Link to="/toprateditem">
          {" "}
          <button className="text-sm lg:text-md cursor-pointer bg-gray-900 text-white rounded-md lg:w-28 w-20 text-center h-10 lg:h-12">
            View All
          </button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 mt-10 gap-6 justify-center">
        {topRatedItems.map((item, index) => {
          return (
            <div
              key={index}
              className="border-2 relative h-60 lg:h-96 border-[#C8E6C9] rounded-lg p-2"
            >
              <img
                src={item.image}
                alt="cart"
                className="w-72 h-28 lg:h-52 hover:scale-105 duration-150 cursor-pointer shadow-xl rounded-md "
              />
              <div className="flex items-center justify-between mt-3 lg:mt-5">
                <p className="text-gray-900 lg:text-lg text-xs font-extrabold ">
                  {" "}
                  {item.price}
                </p>
                <p className="text-sm text-gray-600">
                  ⭐ {item.averageRating.toFixed(1)}
                </p>
              </div>
              <h1 className="text-[12px] lg:text-[15px] text-[#444444] ">
                {item.name}
              </h1>

              <button className="bg-[#444444] bottom-3 absolute left-3 right-3 cursor-pointer lg:p-2 p-1 text-center rounded-sm lg:rounded-md mt-3 text-sm lg:text-lg text-white">
                Add
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopRatedItems;
