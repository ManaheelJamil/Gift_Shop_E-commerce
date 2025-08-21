import { useParams } from "react-router-dom";
import { getAllProducts } from "../../services/productServices";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";
import Unique from "../../components/Unique/unique";
function ProductDetails() {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const products = getAllProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2 className="text-red-500">Product not found</h2>;
  }
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <>
      <div className="p-6 lg:w-[1250px]   lg:mx-auto mx-5 flex gap-10 justify-center items-center my-20">
        <img
          src={product.image}
          alt={product.name}
          className="shadow-xl rounded-xl border w-[40%]"
        />
        <div className="space-y-2">
          <h1 className="text-3xl">{product.name}</h1>
          <p className=" text-md">Price: {product.price}</p>
          <p className="text-md ">Brand: {product.brand}</p>

          <p className="text-sm  text-[#444444]">
            Delivery Charges : According to Distance
          </p>
          <p className="text-md mb-5">Description: {product.description}</p>
          {product.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 text-sm px-2 py-2 rounded-md mr-2"
            >
              {tag}
            </span>
          ))}
          <div className="flex items-center mt-12 gap-5">
            <button className="bg-[#444444] cursor-pointer p-2 shadow-md w-40 rounded-md text-white">
              Add to Cart
            </button>
            <div className="flex items-center gap-2 bg-white shadow-md border border-[#444444] p-2 rounded-md w-32  justify-between">
              <button
                onClick={increment}
                className="bg-[#444444] p-1 cursor-pointer rounded-sm text-white"
              >
                <FaPlus />
              </button>
              <button>{count}</button>
              <button
                onClick={decrement}
                className="bg-[#444444] p-1 cursor-pointer rounded-sm text-white"
              >
                <FaMinus />
              </button>
            </div>
            <button className="bg-[#444444] cursor-pointer  p-2 shadow-md w-40 rounded-md text-white">
              Order Now{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[1250px] lg:mx-auto mx-5 my-20">
        <Unique />
      </div>
    </>
  );
}

export default ProductDetails;
