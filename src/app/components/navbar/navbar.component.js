import React, { useState } from 'react';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../utils/context-provider';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { GOVT_ADDR } from '../../utils/constants';

function Navbar() {
	const [modal, setModal] = useState(false);
	const { address, setAddress } = useContext(Context);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const NavLinks = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Properties',
			path: '/properties',
		},
		{
			name: 'Register',
			path: '/Register',
		},
	];
	const disConnect = () => {
		setAddress(undefined);
	};
	const connectWallet = async () => {
		try {
			var acc = await window.ethereum.request({
				method: 'eth_requestAccounts',
			});
			if (acc[0] !== undefined) {
				setAddress(acc[0]);
				return;
			}
		} catch (error) {}
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
					<h3 className="navbar-brand" onClick={() => navigate('/')}>
						Crypto State
					</h3>
					<div className="nav-links center">
						{NavLinks.map((link) =>
							link.name === 'Register' &&
							address !== GOVT_ADDR.toLowerCase() ? null : (
								<Link
									className={`nav-link ${
										pathname === link.path ? 'active' : ''
									}`}
									to={link.path}
									key={link.name}
								>
									{link.name}
								</Link>
							)
						)}
					</div>
				</div>
				<div className="center">
					<button onClick={handleButtonClick}>
						{!address ? 'Connect to Wallet' : 'Disconnect to Wallet'}
					</button>
				</div>
			</div>
			<div
				className="nav-modal-container"
				onClick={() => setModal(false)}
				style={
					modal
						? { transform: 'translateX(0)' }
						: { transform: 'translateX(-100%)' }
				}
			>
				<div className="nav-modal center">
					{NavLinks.map((link) =>
						link.name === 'Register' &&
						address !== GOVT_ADDR.toLowerCase() ? null : (
							<Link
								className={`nav-link ${pathname === link.path ? 'active' : ''}`}
								to={link.path}
								key={link.name}
								onClick={() => setModal(!modal)}
							>
								{link.name}
							</Link>
						)
					)}
				</div>
			</div>
		</>
	);
}

export default Navbar;
