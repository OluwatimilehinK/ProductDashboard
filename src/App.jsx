import Products from "./components/Products"
import "react-loading-skeleton/dist/skeleton.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";


function App() {
  
  return (
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Product" element={<Products/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
