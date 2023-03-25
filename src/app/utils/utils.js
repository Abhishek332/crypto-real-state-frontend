import Web3 from "web3";
import { getProvider } from "./load-contracts";

export const getAccount = async () => {
    if(window.ethereum){
      const acc = await window.ethereum.request({
        method: "eth_requestAccounts",
       
      });
      return Web3.utils.toChecksumAddress(acc[0]);
    }
    else{
      return undefined
    }
  
    // do something with new account here
  };
  export const getChainId = async () => {
    const provider = await getProvider();
    const web3 = new Web3(provider);
    const chainID = await web3.eth.getChainId();
    return chainID;
  };

  export const switchNetwork = async (chainId) => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: Web3.utils.toHex(chainId) }],
        });
        window.location.reload()
      } catch (error) {
        console.error(error);
      }
    }
  };