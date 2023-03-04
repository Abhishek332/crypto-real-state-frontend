import { useLocation } from "react-router";
import "./Detiles.css";
import { ethers } from "ethers";
import Button from "@mui/material/Button";
import React, { useContext, useEffect, useState } from "react";
import { setstate } from "../../ContextApi/Contextapi";
import { Typography } from "@mui/material";
function Detiles() {
  const { contractInstance, address } = useContext(setstate);
  const buyItem = async (e) => {
    e.preventDefault();

    const price = ethers.utils.parseUnits(
      loaction.state?.price.toString(),
      "ether"
    );
    let consts = await contractInstance?.methods
      .buyToken(loaction.state?.tokenId)
      .send({ from: address, value: price });
  };
  console.log(address);
  const putonSalle = async (e) => {
    e.preventDefault();
    let consts = await contractInstance.methods
      .toggleForSale(loaction.state?.tokenId)
      .send({ from: address });
  };
  const chnagePrice = async (e) => {
    e.preventDefault();
    let listingPrice = await contractInstance.methods.getListingPrice().call();
    let p = loaction.state?.price / 2;
    const price = ethers.utils.parseUnits(p.toString(), "ether");
    let consts = await contractInstance.methods
      .changeTokenPrice(loaction.state?.tokenId, price)
      .send({ from: address, value: listingPrice });
  };
  const loaction = useLocation();
  console.log(loaction);
  let forsale = loaction.state.forSale;

  console.log("data", forsale);
  return (
    <div>
      <div className="image">
        <img src={loaction.state?.Image} alt="" />
      </div>

      <div className="allinfo">
        <Typography variant="h6" csolor="text.secondary">
          <h3>TokenId:</h3> {loaction.state?.tokenId}
        </Typography>{" "}
        <Typography variant="h6" csolor="text.secondary">
          <h3>Owner:</h3> {loaction.state?.owner}
        </Typography>{" "}
        <Typography variant="h6" csolor="text.secondary">
          <h3>OldOwner:</h3> {loaction.state?.oldowner}
        </Typography>{" "}
        <Typography variant="h6" csolor="text.secondary">
          <h3>Place:</h3> {loaction.state?.adress}
        </Typography>
        <Typography variant="h6" csolor="text.secondary">
          <h3>price:</h3> {loaction.state?.price}
        </Typography>
      </div>
      {loaction.state.owner.toLowerCase() === address &&
      address !== undefined ? (
        <div className="">
          <div className="btn_div">
            <Button variant="contained" onClick={chnagePrice} className="btn">
              Incress Price{" "}
            </Button>
          </div>
          {forsale ? (
            <div className="btn_div">
              <Button variant="contained" onClick={putonSalle} className="btn">
                remove from the sell{" "}
              </Button>
            </div>
          ) : (
            <div className="btn_div">
              <Button variant="contained" onClick={putonSalle} className="btn">
                Put on the sell{" "}
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="btn_div">
          {forsale ? (
            <Button variant="contained" onClick={buyItem} className="btn">
              Buy Now{" "}
            </Button>
          ) : (
            <h1>this is curently not for sale</h1>
          )}
        </div>
      )}
    </div>
  );
}

export default Detiles;
