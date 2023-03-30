import Navbar from '../components/navbar/navbar.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home-page/home-page.component';
import Footer from '../components/footer/footer.component';
import Property from '../pages/property-page/property-page.component';
import Register from '../pages/register-page/register-page.component';
import RecipeReviewCard from '../components/Detiles_page/Eetiles';
import { useContext, useEffect, useState } from 'react';
import { getChainId } from '../utils/utils';
import { ARBI_TESTNET_CHAIN_ID } from '../utils/constants';
import { getAccount } from '@wagmi/core';
import SwitchNetwork from '../components/switchNetwork/SwitchNetwork';
import { Context } from '../utils/context-provider';

// you can import like this
const Router = () => {
	const [chainId, setChainID] = useState(ARBI_TESTNET_CHAIN_ID);
	const { setAddress } = useContext(Context);
	const checkChainChanged = async () => {
		const netowrkChainId = await getChainId();
		if (netowrkChainId !== ARBI_TESTNET_CHAIN_ID) {
			setChainID(netowrkChainId);
		}
	};
	
	if (window.ethereum) {
		window.ethereum.on('chainChanged', () => {
			checkChainChanged();
			window.location.reload();
		});

		window.ethereum.on('accountsChanged', function (accounts) {
			// Time to reload your interface with accounts[0]!
			const acc = getAccount();
			setAddress(acc);
			window.location.reload();
		});
	}
		
	useEffect(() => {
		checkChainChanged();
	}, []);

	return (
		<div className="container">
			{chainId !== ARBI_TESTNET_CHAIN_ID ? (
				<div>
					<SwitchNetwork />
				</div>
			) : (
				<div>
					<BrowserRouter>
						<Navbar />
						<div className="page-container">
							<Routes>
								<Route path="/" element={<Home />}></Route>
								<Route path="/moreInfo" element={<RecipeReviewCard />} />
								<Route path="/properties" element={<Property />} />
								<Route path="/Register" element={<Register />} />
							</Routes>
						</div>
						<Footer />
					</BrowserRouter>
				</div>
			)}
		</div>
	);
};

export default Router;
