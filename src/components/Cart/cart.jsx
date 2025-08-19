// import { getAllProducts } from "../../services/productServices";
function Cart({onSort}) {
  // const products = getAllProducts();
  return (
    <div className="grid grid-cols-4 mt-10 gap-2">
      {onSort
        ? onSort.map((item, index) => {
            return (
              <a href={`/products/${item.id}`}>
                <div key={index}>
                  <img
                    src={item.image}
                    alt="cart"
                    className="w-72 h-72 shadow-xl rounded-md "
                  />
                  <h1 className="text-xl mt-5">{item.name}</h1>
                  <h1 className="text-gray-600 ">Price : {item.price}</h1>
                </div>
              </a>
            );
          })
        : "loading....."}
    </div>
  );
}

export default Cart;
