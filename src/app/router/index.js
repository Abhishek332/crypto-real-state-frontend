import Navbar from "../components/navbar/Navbar";
import "./wrapper.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home-page/home-page.component";
import Footer from "../components/Footer/Footer";
import Property from "../pages/property-page/property-page.component";
import Register from "../pages/register-page/register-page.component";
import RecipeReviewCard from "../components/Detiles_page/Eetiles";

// you can import like this
const Router = ()=>{
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/moreInfo" element={<RecipeReviewCard />} />
          <Route path="/properties" element={<Property />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
          </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Router;
