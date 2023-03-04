import Navbar from "../navbar/Navbar";
import "./wrapper.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/home-page/home-page.component";
import Footer from "../Footer/Footer";
import Property from "../Property_page/Property";
import Register from "../../pages/register-page/register-page.component";
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
