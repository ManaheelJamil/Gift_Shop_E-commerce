import { useCart } from "../../context/CartContext";
import { IoTrashBin } from "react-icons/io5";

function CartDetail() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="lg:w-[1250px] lg:mx-auto mx-5 my-5 lg:my-10">
      <h2 className="lg:text-4xl text-xl font-bold mb-2 lg:mb-10">Your Cart</h2>
      {cartItems.length === 0 && <p>No items in cart</p>}
      <div className="grid grid-cols-5 border-b pb-4 ">
        <h1 className="text-xl ">Item Image</h1>
        <h1 className="text-xl ">Item Name</h1>
        <h1 className="text-center text-xl">Item Quantity</h1>
        <h1 className="text-center text-xl">Item Price</h1>
      </div>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-5 py-5 justify-between items-center p-2 border-b"
        >
          <img
            src={item.image}
            alt=""
            className="lg:w-24 w-10 h-10 shadow-xl rounded-md lg:rounded-xl border border-[#C8E6C9] lg:h-24"
          />
          <span className="text-xs lg:text-lg">{item.name}</span>
          <span className="text-center lg:text-lg text-xs">
            {item.quantity}
          </span>
          <span className="text-center lg:text-lg text-xs">
            {item.price * item.quantity}
          </span>
          <button
            className="text-red-800 cursor-pointer flex justify-center text-center "
            onClick={() => removeFromCart(item.id)}
          >
            <IoTrashBin className="text-center text-sm lg:text-2xl" />
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div className="mt-6 flex flex-col items-end gap-3">
          <h3 className="text-xl font-bold">
            Total: <span className="text-green-700">Rs {totalPrice}</span>
          </h3>
          <button
            className="bg-gray-900 cursor-pointer text-white px-4 py-2 rounded-md"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default CartDetail;
