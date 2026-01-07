import Products from "./components/Products"
import "react-loading-skeleton/dist/skeleton.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import ProductDetailPage from "./components/ProductDetailPage";


function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes >
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Product" element={<Products/>}/>
      <Route path="/Product/:id" element={<ProductDetailPage/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
