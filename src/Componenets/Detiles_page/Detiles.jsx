import { useLocation } from "react-router";
import "./Detiles.css";
import { ethers } from "ethers";
import Button from "@mui/material/Button";
import React, { useContext, useEffect, useState } from "react";
import { setstate } from "../../ContextApi/Contextapi";
function Detiles() {
  const { contract, account } = useContext(setstate);
  const buyItem = async (e) => {
    e.preventDefault();
  
    const price = ethers.utils.parseUnits(loaction.state?.price.toString(), 'ether')   
    let consts = await contract?.methods
      .buyToken(loaction.state?.tokenId)
      .send({ from:account,value:price });
 
  };
  const putonSalle = async (e) => {
    e.preventDefault();
    let consts = await contract.methods
      .toggleForSale(loaction.state?.tokenId)
      .send({ from: account });

  };
  const chnagePrice = async (e) => {
    e.preventDefault();
    let listingPrice = await contract.methods.getListingPrice().call()
    let p = loaction.state?.price/2
    const price = ethers.utils.parseUnits(p.toString(), 'ether')
    let consts = await contract.methods
      .changeTokenPrice(loaction.state?.tokenId,price)
      .send({ from: account,value:listingPrice });
  
  };
  const loaction = useLocation();
  let forsale = loaction.state.forsale
 
  console.log(loaction.state)
  return (
    <div>
      <div className="image">
        <img src={loaction.state?.Image}alt="" />
      </div>

      <div className="allinfo">
        <div>
          <h3>TokenId:</h3> {loaction.state?.tokenId}
        </div>
        <div>
          {" "}
          <h3>Owner:</h3> {loaction.state?.owner}
        </div>
        <div>
          {" "}
          <h3>OldOwner:</h3> {loaction.state?.oldowner}
        </div>
        <div>
          {" "}
          <h3>Place:</h3> {loaction.state?.adress}
        </div>
        <div>
          <h3>price:</h3> {loaction.state?.price}
        </div>
       
      </div>
      {loaction.state.owner == account  && account !== undefined ? (
        <div className="">
          <div className="btn_div">
            <Button variant="contained" onClick={chnagePrice} className="btn">
              Incress Price{" "}
            </Button>
          </div>
          <div className="btn_div">
            <Button variant="contained" onClick={putonSalle} className="btn">
              Put on the sell{" "}
            </Button>
          </div>
        </div>
      ) : (
        <div className="btn_div">

          {
           forsale ? (  <Button variant="contained"  onClick={buyItem} className="btn">
            Buy Now{" "}
          </Button>):(

            <h1>this is  curently not for sale</h1>
          )
          }
        
        </div>
      )}
    </div>
  );
}

export default Detiles;
