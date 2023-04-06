import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	HomePage,
	PropertyPage,
	RegisterPage,
	PropertyDetailsPage,
} from '../pages';
import { Navbar, Footer } from '../components';
import { useContext, useEffect, useState } from 'react';
import { getChainId } from '../utils/utils';
import { ARBI_TESTNET_CHAIN_ID } from '../utils/constants';
import { switchNetwork } from '../utils/utils';
import { getAccount } from '@wagmi/core';
import { Context } from '../utils/context-provider';
import LoadingIndicator from '../components/loading-indicator/loading-indicator.component';
import ChainChangeLoader from '../assets/chain-change-loader.json';
import MetamaskIcon from '../assets/metamask-icon.svg';

const Router = () => {
	const [chainId, setChainID] = useState(ARBI_TESTNET_CHAIN_ID);
	const { setAddress, isMetamaskInstalled } = useContext(Context);

	const checkChainChanged = async () => {
		const networkChainId = await getChainId();
		if (networkChainId !== ARBI_TESTNET_CHAIN_ID) {
			setChainID(networkChainId);
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

	if (chainId !== ARBI_TESTNET_CHAIN_ID) {
		const chainChangeLoaderOptions = {
			indicator: ChainChangeLoader,
			text: 'Your are on wrong network, Please switch to ARBITRUM TESTNET',
			buttonText: 'Switch to Testnet',
			buttonAction: () => switchNetwork(ARBI_TESTNET_CHAIN_ID),
		};

		return <LoadingIndicator {...chainChangeLoaderOptions} />;
	}

	if (!isMetamaskInstalled) {
		const installMetamaskLoaderOptions = {
			indicator: MetamaskIcon,
			text: 'Metamsk is not installed in your system, Please install Metamask and try again',
			buttonText: 'Click here to install',
			buttonAction: () =>
				(window.location.href = 'https://metamask.io/download/'),
		};

		return <LoadingIndicator {...installMetamaskLoaderOptions} image />;
	}

	return (
		<div className="container">
			<BrowserRouter>
				<Navbar />
				<div className="page-container">
					<Routes>
						<Route path="/" element={<HomePage />}></Route>
						<Route path="/properties" element={<PropertyPage />} />
						<Route path="/property-details" element={<PropertyDetailsPage />} />
						<Route path="/Register" element={<RegisterPage />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default Router;
