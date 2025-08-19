// src/services/productServices.jsx
import CartData from "../data/cartdata.json"
// ====================
// Get all products
// ====================
export function getAllProducts() {
   const productsWithAvg = CartData.map((item) => {
    const totalRating = item.reviews.reduce((sum, r) => sum + r.rating, 0);
    const ratingCount = item.reviews.length;
    const averageRating = ratingCount > 0 ? totalRating / ratingCount : 0; 
    return { ...item, averageRating };
  });

  const sortedProducts = productsWithAvg
  .sort((a, b) => b.averageRating - a.averageRating 
  );
  return sortedProducts;
}

// ====================
// Get product by ID
// ====================
export function findProductById(id) {
  return CartData.find((product) => product.id === id);
}

// ====================
// Future placeholder APIs
// ====================
// export function createProduct(newProduct) { ... }
// export function updateProduct(id, updatedData) { ... }
// export function deleteProduct(id) { ... }
