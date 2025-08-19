import { useParams } from "react-router-dom";
import { getAllProducts } from "../../services/productServices";

function CategoryDetails() {
  const { id } = useParams(); 
  const products = getAllProducts();

  const categoryProducts = products.filter((p) => p.categoryId === id);

  if (categoryProducts.length === 0) {
    return <h2 className="text-red-500 text-center mt-20">No products found</h2>;
  }

  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
      {categoryProducts.map((item) => (
        <div key={item.id} className="p-6 shadow-lg rounded-xl">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-60 object-cover rounded-md"
          />
          <div className="mt-5 text-center">
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <p className="mt-2 text-lg">Price: Rs {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryDetails;
