import { useParams } from "react-router-dom";
import { getAllProducts } from "../../services/productServices";

function ProductDetails() {
  const { id } = useParams(); // get dynamic id from URL
  const products = getAllProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2 className="text-red-500">Product not found</h2>;
  }

  return (
    <div className="p-6 flex gap-10 justify-center items-center my-20">
      <img src={product.image} alt={product.name} className="shadow-xl rounded-xl"/>
      <div>
        <h1 className="text-6xl">{product.name}</h1>
        <p className="mt-3 text-xl">Price: {product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
