import React from 'react';
import './home-page.css';
import Contectus from '../../components/Contact/contactus';
import IndiaLogo from '../../components/india-logo/india-logo.component';
import Header from '../../components/header/header.component';
import House from '../../assets/house.jpeg';
import VarificationProcess from '../../components/varification-process/varification-process.component';

function Home() {
	

	return (
		<div>
			<Header logo={IndiaLogo} background={House} >
				<div className="header-text">
					<h1 className="heading">Around the India</h1>
					<p className="header-paragraph">
						"crypto state - “Where Dreams Come Home & become secure”
					</p>
				</div>
			</Header>
			<VarificationProcess/>
			<Contectus />
		</div>
	);
}

export default Home;
