import { Switch } from "react-router";
import Navbar from "../navbar/Navbar";
import "./wrapper.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Footer from "../Footer/Footer";
import Detiles from "../Detiles_page/Detiles";
import Property from "../Property_page/Property";
import Register from "../Register_page/Register";
import { useEffect } from "react";
import RecipeReviewCard from "../Detiles_page/Eetiles";



// you can import like this
function wrapper() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/moreInfo" element={<RecipeReviewCard />} />
          <Route path="/properties" element={<Property />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default wrapper;
