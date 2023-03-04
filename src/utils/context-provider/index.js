
  
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { loadContracts } from "../../components/loadContract";

const Context = createContext({});

const ContextProvider = ({children})=>{
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

  return <Context.Provider value={{ contractInstance,address,setAddress,setContract }}>{children}</Context.Provider>
}

export {Context};
export default ContextProvider;