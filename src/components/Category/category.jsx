import React from "react";
import CategoryData from "../../data/category.json";
function Category() {
  return (
    <div className="my-40 text-center">
      <h1 className="text-4xl mx-auto ">Choose Your Perfect Gifts</h1>
      <p className="mt-3 text-sm">
        Explore our collection of unique and thoughtful gifts. Perfect for every
        occasion and every special someone.
      </p>
      <div>
        <div className="flex mt-20 gap-6 justify-center">
          {CategoryData
            ? CategoryData.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      src={item.images}
                      alt="cart"
                      className="w-40 h-40 shadow-xl rounded-full "
                    />
                    <h1 className="text-xl mt-5">{item.name}</h1>
                  </div>
                );
              })
            : "loading....."}
        </div>
      </div>
    </div>
  );
}

export default Category;
