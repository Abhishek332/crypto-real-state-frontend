import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	HomePage,
	PropertyPage,
	RegisterPage,
	PropertyDetailsPage,
} from '../pages';
import { Navbar, Footer } from '../components';
import RecipeReviewCard from '../components/Detiles_page/Eetiles';
import { useContext, useEffect, useState } from 'react';
import { getChainId } from '../utils/utils';
import { ARBI_TESTNET_CHAIN_ID } from '../utils/constants';
import { getAccount } from '@wagmi/core';
import SwitchNetwork from '../components/switchNetwork/SwitchNetwork';
import { Context } from '../utils/context-provider';
import AlertDialog from '../components/alert-dialog/alert-dialog.component';

// you can import like this
const Router = () => {
	const [chainId, setChainID] = useState(ARBI_TESTNET_CHAIN_ID);
	const { setAddress,isMetamaskInstalled } = useContext(Context);
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
								<Route path="/" element={<HomePage />}></Route>
								<Route path="/moreInfo" element={<RecipeReviewCard />} />
								<Route path="/properties" element={<PropertyPage />} />
								<Route
									path="/property-details"
									element={<PropertyDetailsPage />}
								/>
								<Route path="/Register" element={<RegisterPage />} />
							</Routes>
						</div>
						<Footer />
					</BrowserRouter>
				</div>
			)}
			    <AlertDialog
				title="install Metamask"
				text="Please install Metamask"
				isDialogOpen={!isMetamaskInstalled}
				
			/>
		</div>
	);
};

export default Router;
