import { CONTRACT_ADDRESS } from '../constants';
import Cryptostate from './contractabi.json';
import Web3 from 'web3';

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
		CONTRACT_ADDRESS
	);
	return contractInstance;
};

export { loadContracts, getProvider };
