import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/context-provider";
import MediaCard from "./card/Card";

import "./property-page.css";
import { loadContracts } from "../../utils/load-contracts";
import Loader from "../../components/loader/Loder";
import { ethers } from "ethers";

function Property() {
  const { contractInstance, address, setContract } = useContext(Context);
  const [allProperty, setallProperty] = useState();

  const [loading, setloading] = useState(false);

  const getallProp = async () => {
    const cr = await loadContracts();
    setContract(cr);

    let index = await contractInstance?.methods
      .getNumberOfTokensMinted()
      .call();
    let arr = [index];

    for (let x = 1; x <= index; x++) {
      arr[x - 1] = await contractInstance?.methods.allCryptostate(x).call();
      // console.log(y);
    }
    setallProperty(arr);
    setloading(false);
  };
  const loadContractIN = async () => {
    getallProp();
  };
  console.log(loading);
  useEffect(() => {
    setloading(true);
    loadContractIN();
  }, [contractInstance === undefined]);

  return (
    <div className="main ">
      {" "}
      {address === undefined ? (
        <div>
          <h1>Please connect your metamask</h1>
        </div>
      ) : (
        allProperty?.map((item) => (
          <MediaCard
            pro={{
              owner: item.currentOwner,
              forSale: item.forSale,
              oldOwener: item.perviousOwner,
              place: item.placeAddress,
              price: ethers.utils.formatEther( item.price ),
              tokenId: item.tokenId,
              tokenURI: item.tokenURI,
              placename: item.tokenName,
              forsale: item.forSale,
            }}
          />
        ))
      )}
    </div>
  );
}

export default Property;
