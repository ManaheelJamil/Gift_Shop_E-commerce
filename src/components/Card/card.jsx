import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart({ onSort, onCategorized }) {
  const { addToCart } = useCart();

  const productsToShow =
    onCategorized && onCategorized !== "00"
      ? onSort.filter((item) => item.categoryId === onCategorized)
      : onSort;
  return (
    <div className="grid  lg:grid-cols-4 md:grid-cols-2 grid-cols-2  gap-4">
      {productsToShow
        ? productsToShow.map((item, index) => {
            return (
              <div
                key={index}
                className="border-2 relative h-64 lg:h-96 p-2 border-[#C8E6C9] rounded-xl"
              >
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.image}
                    alt="cart"
                    className="w-72 hover:scale-105 duration-100  h-32 lg:h-56 shadow-xl rounded-xl "
                  />
                </Link>
                <p className="text-gray-900 lg:text-md text-xs font-extrabold mt-3 lg:mt-5">
                  {" "}
                  {item.price}
                </p>
                <h1 className="text-[12px] lg:text-[15px] text-[#444444] ">
                  {item.name}
                </h1>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-[#444444] bottom-3 absolute left-3 right-3 cursor-pointer lg:p-2 p-1 text-center rounded-sm lg:rounded-md mt-3 text-sm lg:text-lg text-white"
                >
                  Add to Cart
                </button>
              </div>
            );
          })
        : "loading....."}
    </div>
  );
}

export default Cart;
