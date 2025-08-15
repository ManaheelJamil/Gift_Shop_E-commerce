import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import MainLayout from "./Layouts/MainLayout"; 
import LatestItem from "./pages/latestItem/latestitem"
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latestitem" element={<LatestItem />} />
          
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
