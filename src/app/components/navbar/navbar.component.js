import React, { useState } from 'react';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import './navbar.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../utils/context-provider";
import { connectToWallet } from "../../utils/load-contracts";

function Navbar() {
	const [modal, setModal] = useState(false);
	const { address, setAddress } = useContext(Context);
	//   const { connect } = useConnect({
	//     connector: new InjectedConnector(),
	//   });

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
        if(address !== undefined) {
			disConnect();
		} else {
            connectWallet();
		}
    };

	return (
		<div className="navbar center">
			<div className="center">
				<LegendToggleIcon
					onClick={() => setModal(!modal)}
					className={`toggle-btn ${modal ? 'flip-toggle' : 'reverse-toggle'}`}
				/>
				<h3 className="navbar-brand">Crypto State</h3>
				<div className="nav-links center">
					<Link className="nav-link" to="/">
						Home
					</Link>
					<Link className="nav-link" to="/properties">
						Properties
					</Link>
				</div>
			</div>
			<div className="center">
				<button onClick={handleButtonClick}>
					{!address ? 'Connect to Wallet' : 'Disconnect to Wallet'}
				</button>
			</div>
		</div>
	);
}

export default Navbar;
