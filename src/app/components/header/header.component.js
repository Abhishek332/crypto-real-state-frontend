import React from 'react';
import './header.css'

function Header({ title, logo: Logo, background='', children }) {
const headerStyle = {
    background: `url(${background}) center center/cover`
}

	return (
		<header className="header center" style={headerStyle}>
			{children}
			<Logo />
		</header>
	);
}

export default Header;
