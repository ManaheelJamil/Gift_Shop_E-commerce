import React, { useState } from "react";
import Header from "../../components/Header/header";
import { IoGridSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { LuArrowDownUp } from "react-icons/lu";
import Cart from "../../components/Cart/cart";
import Category from "../../components/Category/category";
import Unique from "../../components/Unique/unique";
function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="mx-10">
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
              <img src="/assets/two-col.svg" alt="grid" />
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
            <select className="outline-none cursor-pointer  ">
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
        <Cart/>
        <Category />
        <Unique />
      </div>
    </div>
  );
}

export default Home;
