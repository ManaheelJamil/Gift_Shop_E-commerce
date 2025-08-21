import React, { useState } from "react";
import { IoGridSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";
import Cart from "../../components/Cart/cart";
import Category from "../../components/Category/category";
import Unique from "../../components/Unique/unique";
import TopRatedItems from "../../components/TopRatedItems/topRatedItems";
import { getAllProducts } from "../../services/productServices";
const categories = [
  {
    id: "00",
    category: "All Products",
  },
  {
    id: "01",
    category: "Jewelary",
  },
  {
    id: "02",
    category: "Decorator",
  },
  {
    id: "03",
    category: "HeadPhones",
  },
  {
    id: "04",
    category: "Home Appliances",
  },
  {
    id: "05",
    category: "Hand Watches",
  },
  {
    id: "06",
    category: "Men's Wallet",
  },
];

function Home() {
  const products = getAllProducts();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [open, setOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Best Match");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.id);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "Highest Price") {
      return Number(b.price) - Number(a.price);
    }
    if (sortOption === "Lowest Price") {
      return Number(a.price) - Number(b.price);
    }
    if (sortOption === "Newest First") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (sortOption === "Oldest First") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }a
    return 0;
  });


  return (
    <div className="lg:w-[1250px]  mx-5 lg:mx-auto">

      <div className="sticky lg:block hidden top-24 border-2 border-x-transparent  border-t-transparent border-b-[#444444] bg-white z-30  left-0 right-0 ">
        <div className=" justify-end relative  w-[500px]   py-5 flex items-center gap-5">
          <button
            onClick={handleOpen}
            className="flex cursor-pointer items-center justify-center text-[#444444] w-32 gap-2 text-md border border-gray-300 rounded-lg p-2"
          >
            <IoGridSharp className="text-blue-950 text-lg" />
            View
          </button>
          {open && (
            <div className="border left-0 border-gray-300 px-2 py-5 rounded-md w-10 flex flex-col justify-start absolute  bg-white top-0 items-center">
              <img src="/assets/two-col.svg" alt="grid" />
              <br />
              <img src="/assets/trio-col.svg" alt="grid" />
              <br />
              <img src="/assets/one-row.svg" alt="grid" />
            </div>
          )}
          <button className="flex cursor-pointer items-center  text-[#444444] justify-center w-32 gap-2 text-md border border-gray-300 rounded-lg p-2">
            <FaFilter className="text-blue-950 text-md" />
            Filter
          </button>
          <button className="flex cursor-pointer items-center text-[#444444]  justify-center w-72 gap-2 text-md   border border-gray-300 rounded-lg p-3">
            <LuArrowDownUp className="text-blue-950 text-xl" />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="outline-none cursor-pointer  "
            >
              <option>Best Match</option>
              <option>Highest Price</option>
              <option>Lowest Price</option>
              <option>Newest First </option>
              <option>Oldest First </option>
            </select>{" "}
          </button>
        </div>
      </div>
      <div className="mb-20 mt-">
        <div className="flex mt-5 relative gap-10">
          <div className="w-64 sticky top-52   h-screen bg-white lg:block hidden ">
            {categories.map((item, index) => (
              <h1
                key={index}
                onClick={() => handleCategoryClick(item)}
                className={`text-md p-4 cursor-pointer border border-[#444444] text-center text-[#444444] hover:bg-[#C8E6C9] ${
                  selectedCategory === item.id ? "bg-[#C8E6C9]" : ""
                }`}
              >
                {item.category}
              </h1>
            ))}
          </div>
          <div className=" w-full">
            <Cart onSort={sortedProducts} onCategorized={selectedCategory}/>
          </div>
        </div>
      </div>
      <Category />
      <Unique />
      <TopRatedItems />
    </div>
  );
}

export default Home;
