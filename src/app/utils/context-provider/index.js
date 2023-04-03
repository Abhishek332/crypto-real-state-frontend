import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { loadContracts } from '../load-contracts';

const Context = createContext({});

const ContextProvider = ({ children }) => {
	const [contractInstance, setContract] = useState();
	const [address, setAddress] = useState();
	const [isMetamaskInstalled,setisMetamaskInstalled] = useState(true)
	const load = async () => {
	
		if(window.ethereum){
			try {
				const contract = await loadContracts();
				setContract(contract);
				const acc = await window.ethereum.request({
					method: 'eth_requestAccounts',
				});
				setAddress(acc[0]);
			} catch (error) {
				console.log(error)
			}
		}
		else{
			openPopupForMetamaskConnection()
		}
		

	};
	const openPopupForMetamaskConnection = () => {
		setisMetamaskInstalled(false);
		setTimeout(() => {
			setisMetamaskInstalled(true);
		}, 12000);
	};
	useEffect(() => {
		load();
	}, []);

	return (
		<Context.Provider
			value={{ contractInstance, address, setAddress, setContract ,isMetamaskInstalled}}
		>
			{children}
		</Context.Provider>
	);
};

export { Context };
export default ContextProvider;
