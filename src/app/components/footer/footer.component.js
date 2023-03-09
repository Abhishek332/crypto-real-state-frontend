import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
	return (
			<footer className="center">
        <div className="links center">
        <Link className="nav-link" to="#head">Home</Link>
        <Link className="nav-link" to="#properties">Properties</Link>
        <Link className="nav-link" to="#about">About</Link>
        <Link className="nav-link" to="#contact">Contact</Link>
        </div>
				<p>
					Copyright &copy;
          {new Date().getFullYear()}{' '}
         | GOVT INDIA All Rights Reserved
				</p>
			</footer>
	);
}

export default Footer;
