import React from "react";
import { getAllProducts } from "../../services/productServices";
function Unique() {
  const products = getAllProducts();
  const latestData = products.slice(-5);
  console.log(latestData, "array");
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
      <div className="grid grid-cols-3 mt-20 gap-6 justify-center">
        {latestData.map((item, index) => {
          return (
            <div key={index}>
              <img
                src={item.image}
                alt="cart"
                className="w-72 h-64 shadow-xl rounded-md "
              />
              <h1 className="text-xl mt-5">{item.name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Unique;
