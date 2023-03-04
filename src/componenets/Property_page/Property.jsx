import React, { useContext, useEffect, useState } from "react";
import { setstate } from "../../ContextApi/Contextapi";
import MediaCard from "./card/Card";

import "./Property.css";
import { loadContracts } from "../loadContract";
function Property() {
  const { contractInstance, address, setContract } = useContext(setstate);
  const [allProperty, setallProperty] = useState();
  console.log(contractInstance);
  const [loding, setloding] = useState(false);

  let i = 0;
  let TokenMinted;
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

    if (arr.length > 0) {
      setloding(false);
    }
    setallProperty(arr);
  };
  const loadContractIN = async () => {
    getallProp();
  };

  useEffect(() => {
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
              price: item.price,
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
