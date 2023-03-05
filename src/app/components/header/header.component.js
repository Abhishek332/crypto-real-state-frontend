import React from 'react';
import './header.css'

function Header({ title, logo: Logo, children }) {
	return (
		<header className="header center">
			{children}
			<Logo />
		</header>
	);
}

export default Header;
