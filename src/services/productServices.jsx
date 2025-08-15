// src/services/productServices.jsx
import CartData from "../data/cartdata.json"
// ====================
// Get all products
// ====================
export function getAllProducts() {
  return CartData;
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
