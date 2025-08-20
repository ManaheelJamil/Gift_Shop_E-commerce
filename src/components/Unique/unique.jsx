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
          <h1 className="lg:text-4xl text-lg mx-auto ">Latest Items</h1>
          <p className="mt-3 text-[#444444] text-[12px] lg:text-sm">
            Explore our collection of unique and thoughtful gifts. Perfect for
            every occasion and every special someone.
          </p>
        </div>
        <a href="/latestitem">
          {" "}
          <button className="text-sm lg:text-md cursor-pointer bg-gray-900 text-white rounded-md lg:w-28 w-20 text-center h-10 lg:h-12">
            View All
          </button>
        </a>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 mt-10 gap-6 justify-center">
        {latestData.map((item, index) => {
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
              <p className="text-gray-900 lg:text-lg text-xs font-extrabold mt-3 lg:mt-5">
                {" "}
                {item.price}
              </p>

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
    </>
  );
}

export default Unique;
