import React from "react";
import CategoryData from "../../data/category.json";
import { Link } from "react-router-dom";
function Category() {
  return (
    <div className="lg:my-40 my-20 text-center">
      <h1 className="text-4xl mx-auto ">Choose Your Perfect Gifts</h1>
      <p className="mt-3 text-sm text-[#444444]">
        Explore our collection of unique and thoughtful gifts. Perfect for every
        occasion and every special someone.
      </p>
      <div>
        <div className="flex  flex-wrap mt-20 gap-6 justify-center">
          {CategoryData.map((item, index) => {
                return (
                  <Link to={`/category/${item.id}`}>
                    <div key={index}>
                      <img
                        src={item.images}
                        alt="cart"
                        className="w-40 hover:scale-105 h-40 shadow-xl rounded-full "
                      />
                      <h1 className="text-lg text-[#444444] mt-5">{item.name}</h1>
                    </div>
                  </Link>
                );
              })
            }
        </div>
      </div>
    </div>
  );
}

export default Category;
