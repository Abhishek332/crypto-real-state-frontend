import { Details } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
// you can import like this
import "./App.css";
import Detiles from "./Componenets/Detiles_page/Detiles";
import Navbar from "./Componenets/navbar/Navbar";
import EngagementCardDemo from "./Componenets/Register_page/Register";
import Property from "./Componenets/Property_page/Property";
import { setstate } from "./ContextApi/Contextapi";
import Home from "./Componenets/Home";

import Contectus from "./Componenets/Contact_us/Contectus";
import Footer from "./Componenets/Footer/Footer";

function App() {
  const [contract, setcontract] = useState();
const [account, setaccount] = useState()

  return (
    <setstate.Provider value={{ contract,account }}>
  <div class="container">
      <Navbar />
   
      <Switch> 
      <Route  exact path="/"component={Detiles}>
          <Home />
        </Route>
        <Route path="/moreInfo" component={Detiles}>
          <Detiles />
        </Route>
        <Route path="/Register" >
          <EngagementCardDemo />
        </Route>
        <Route path="/properties" >
          <Property />
        </Route>
      
      </Switch>
      <Footer/>
    </div>
    </setstate.Provider>
   
  );
}

export default App;
