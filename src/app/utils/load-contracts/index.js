import Cryptostate from "./contractabi.json";
import Web3 from "web3";
const getProvider = async () => {
    if (window.ethereum) {
      const ethereum = window.ethereum;
      try {

        return ethereum;
      } catch (error) {
        console.log(error);
      }
    }
  };


const loadContracts = async () => {
    const web3 = new Web3(await getProvider());
    const contractInstance = await new web3.eth.Contract(
        Cryptostate.abi,
        "0xC713a5f905C44935c782c02E08C3Fa07d19eCa6d"
    );
    console.log(contractInstance);
    return contractInstance

};
export {  loadContracts,getProvider };
