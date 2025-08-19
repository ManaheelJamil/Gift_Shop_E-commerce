import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import MainLayout from "./Layouts/MainLayout"; 
import LatestItem from "./pages/latestItem/latestitem"
import TopRatedItems from "./pages/TopRatedItem/topRatedItem";
import ProductDetails from "./pages/ProductDetails/productDetails"
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latestitem" element={<LatestItem />} />
          <Route path="/toprateditem" element={<TopRatedItems/>}/>
           <Route path="/products/:id" element={<ProductDetails />} />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
