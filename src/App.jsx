import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import Wrapper from "./componenets/wrapper/wrapper";
import { useEffect } from "react";
import Cryptostate from "./componenets/contractabi.json";
import Web3 from "web3";
import { setstate } from "./ContextApi/Contextapi";
import { useState } from "react";
import { connectToWallet, loadContracts } from "./componenets/loadContract";


const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function App() {
  const [contractInstance, setContract] = useState();
  const [address,setAddress] =  useState()
  const load = async () => {
    const contract = await loadContracts();
    console.log(contract)
    setContract(contract);
   const acc =  await window.ethereum.request({
    method: "eth_requestAccounts"})
    setAddress(acc[0])
  };
  useEffect(() => {
  
    load();
  }, []);

  return (
    <WagmiConfig client={client}>
      <setstate.Provider value={{ contractInstance,address,setAddress,setContract }}>
        <Wrapper />
      </setstate.Provider>
    </WagmiConfig>
  );
}

export default App;
