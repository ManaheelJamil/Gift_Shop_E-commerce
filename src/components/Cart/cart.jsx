import {getAllProducts} from "../../services/productServices"
function Cart() {
  const products = getAllProducts()
  return (
    <div className="grid grid-cols-4 mt-10 gap-2">
      {products
        ? products.map((item,index) => {
           return(
             <div key={index}>
              <img src={item.image} alt="cart" className="w-72 h-72 shadow-xl rounded-md "/>
              <h1 className="text-xl mt-5">{item.name}</h1>
              <h1 className="text-gray-600 ">Price : {item.price}</h1>
            </div>
           )
          })
        : "loading....."}
    </div>
  );
}

export default Cart;
