import React, { useContext, useEffect, useState } from "react";
import { setstate } from "../../ContextApi/Contextapi";
import MediaCard from "./card/Card";

import "./Property.css";
function Property() {
  const { contract, account } = useContext(setstate);
  const [allProperty, setallProperty] = useState();
  console.log(contract);
  const [loding, setloding] = useState(false);
  let arr = [];
  let i = 0;
  let TokenMinted;
  const getallProp = async () => {
    let ar = [];
    let index = await contract?.methods.getNumberOfTokensMinted().call();
    for (let x = 1; x <= index; x++) {
      arr[i] = await contract?.methods.allCryptostate(x).call();
      i++;
      // console.log(y);
    }
    if (arr.length > 0) {
      setloding(false);
    }

    console.log(arr);

    setallProperty(arr);
  };

  console.log(allProperty);
  useEffect(() => {
    getallProp();
  }, []);

  console.log(arr[0])
  return (
    <div className="main">
      {" "}
      {loding ? (
        <h1>loading..</h1>
      ) : (
        allProperty?.map((item, i) => (
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
              forsale:item.forSale
            }}
          />
        ))
      )}
    </div>
  );
}

export default Property;
