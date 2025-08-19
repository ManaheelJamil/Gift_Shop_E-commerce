import React, { useState } from "react";
import { IoGridSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";
import Cart from "../../components/Cart/cart";
import Category from "../../components/Category/category";
import Unique from "../../components/Unique/unique";
import TopRatedItems from "../../components/TopRatedItems/topRatedItems";
import { getAllProducts } from "../../services/productServices";
function Home() {
  const products = getAllProducts()
  const [open, setOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Best Match");

  const handleOpen = () => {
    setOpen(!open);
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
    }
    return 0; 
  });

  return (
    <div className="lg:w-[1440px]  mx-5 lg:mx-auto">
      <div>
        <div className=" justify-end relative  w-[400px]   my-5 flex items-center gap-5">
          <button
            onClick={handleOpen}
            className="flex cursor-pointer items-center justify-center w-24 gap-2 text-md border-2 border-gray-300 rounded-md p-2"
          >
            <IoGridSharp className="text-blue-950 text-lg" />
            View
          </button>
          {open && (
            <div className="border-2 left-0 border-gray-300 px-2 py-5 rounded-md w-10 flex flex-col justify-start absolute  bg-white top-0 items-center">
              <img src="/assets/two-col.svg" alt="grid"  />
              <br />
              <img src="/assets/trio-col.svg" alt="grid" />
              <br />
              <img src="/assets/one-row.svg" alt="grid" />
            </div>
          )}
          <button className="flex cursor-pointer items-center justify-center w-24 gap-2 text-md border-2 border-gray-300 rounded-md p-2">
            <FaFilter className="text-blue-950 text-md" />
            Filter
          </button>
          <button className="flex cursor-pointer items-center justify-center w-52 gap-2 text-md   border-2 border-gray-300 rounded-md p-3">
            <LuArrowDownUp className="text-blue-950 text-xl" />
            <select  value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="outline-none cursor-pointer  ">
              <option>Best Match</option>
              <option>Highest Price</option>
              <option>Lowest Price</option>
              <option>Newest First </option>
              <option>Oldest First </option>
            </select>{" "}
          </button>
        </div>
      </div>
      <div className="mb-20 mt-10">
        <hr className="border border-gray-200" />
        <Cart onSort={sortedProducts}/>
        <Category />
        <Unique />
        <TopRatedItems/>
      </div>
    </div>
  );
}

export default Home;
