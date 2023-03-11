import React from 'react';
import './header.css';

function Header({ title, logo: Logo, background = '', children, head = '' }) {
	const headerStyle = {
		background: `linear-gradient(rgb(0 0 0 / 50%), rgba(18, 113, 255, 0.3)), url(${background}) center/cover`,
	};

	return (
		<header
			className={`center ${head ? 'head' : 'header'}`}
			style={background ? headerStyle : {}}
		>
			{children && children}
			{Logo && <Logo />}
		</header>
	);
}

export default Header;
