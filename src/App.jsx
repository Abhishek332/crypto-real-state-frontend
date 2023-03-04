import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import Wrapper from "./components/wrapper/wrapper";
import { useEffect } from "react";
import { setstate } from "./ContextApi/Contextapi";
import { useState } from "react";
import { loadContracts } from "./components/loadContract";


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
