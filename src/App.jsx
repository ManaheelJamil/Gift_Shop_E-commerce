import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import MainLayout from "./Layouts/MainLayout"; 
import LatestItem from "./pages/latestItem/latestitem"
import TopRatedItems from "./pages/TopRatedItem/topRatedItem";
import ProductDetails from "./pages/ProductDetails/productDetails"
import CategoryDetails from "./pages/Category/category"
import { CartProvider } from "./context/CartContext";
import CartDetail from "./pages/CartDetail/cartDetail";
function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latestitem" element={<LatestItem />} />
          <Route path="/toprateditem" element={<TopRatedItems/>}/>
           <Route path="/products/:id" element={<ProductDetails />} />
           <Route path="/category/:id" element={<CategoryDetails />} />
           <Route path="/cart" element={<CartDetail />} />

        </Routes>
      </MainLayout>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
