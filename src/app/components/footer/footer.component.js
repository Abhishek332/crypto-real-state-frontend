import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { Context } from '../../utils/context-provider';
import { GOVT_ADDR } from '../../utils/constants';

function Footer() {
	const { address } = useContext(Context);

	return (
		<footer className="center">
			<div className="links center">
				<Link className="nav-link" to="/">
					Home
				</Link>
				<Link className="nav-link" to="/all-properties">
					All Properties
				</Link>
				{address?.toLowerCase() !== GOVT_ADDR.toLowerCase() ? (
					<Link className="nav-link" to="/my-properties">
						My Properties
					</Link>
				) : (
					<Link className="nav-link" to="/register-property">
						Register Property
					</Link>
				)}
			</div>
			<p>
				Copyright &copy;
				{new Date().getFullYear()} | GOVT INDIA All Rights Reserved
			</p>
		</footer>
	);
}

export default Footer;
