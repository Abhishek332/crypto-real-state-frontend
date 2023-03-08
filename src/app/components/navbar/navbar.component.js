import React, { useState } from 'react';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../utils/context-provider';
import { connectToWallet } from '../../utils/load-contracts';
import { useLocation } from 'react-router';

function Navbar() {
	const [modal, setModal] = useState(false);
	const { address, setAddress } = useContext(Context);
	const {pathname} = useLocation();

	//   const { connect } = useConnect({
	//     connector: new InjectedConnector(),
	//   });

	const NavLinks = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Properties',
			path: '/properties',
		},
	];

	const disConnect = () => {
		setAddress(undefined);
	};

	const connectWallet = async () => {
		var acc = await window.ethereum.request({ method: 'eth_accounts' });
		console.log(acc);

		if (acc[0] !== undefined) {
			setAddress(acc[0]);
			return;
		}

		const addr = await connectToWallet();
		setAddress(addr[0]);
	};

	const handleButtonClick = () => {
		if (address !== undefined) {
			disConnect();
		} else {
			connectWallet();
		}
	};

	return (
		<>
			<div className="navbar center">
				<div className="center">
					<LegendToggleIcon
						onClick={() => setModal(!modal)}
						className={`toggle-btn ${modal ? 'flip-toggle' : 'reverse-toggle'}`}
					/>
					<h3 className="navbar-brand">Crypto State</h3>
					<div className="nav-links center">
						{NavLinks.map((link) => (
							<Link
								className={`nav-link ${pathname === link.path ? 'active' : ''}`}
								to={link.path}
								key={link.name}
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
				<div className="center">
					<button onClick={handleButtonClick}>
						{!address ? 'Connect to Wallet' : 'Disconnect to Wallet'}
					</button>
				</div>
			</div>
			<div
				className="nav-modal center"
				style={
					modal
						? { transform: 'translateX(0)' }
						: { transform: 'translateX(-100%)' }
				}
			>
				{NavLinks.map((link) => (
					<Link
						className={`nav-link ${pathname === link.path ? 'active' : ''}`}
						to={link.path}
						key={link.name}
						onClick={() => setModal(!modal)}
					>
						{link.name}
					</Link>
				))}
			</div>
		</>
	);
}

export default Navbar;
