import React from 'react';
import ContactUs from '../../components/contact-us/contact-us.component';
import IndiaLogo from '../../components/india-logo/india-logo.component';
import Header from '../../components/header/header.component';
import House from '../../assets/house.jpeg';
import CardsContainer from '../../components/cards-container/cards-container.component';
import { TrustFactors } from '../../data/trust-factors.data';
import TrustCard from '../../components/trust-card/trust-card.component';

function Home() {
	

	return (
		<>
			<Header logo={IndiaLogo} background={House} >
				<div className="header-text">
					<h1 className="heading">Around the India</h1>
					<p className="header-paragraph">
						"crypto state - “Where Dreams Come Home & become secure”
					</p>
				</div>
			</Header>
			<CardsContainer heading="Trust Factors" dataList={TrustFactors.data} child={TrustCard}/>
			<ContactUs />
		</>
	);
}

export default Home;
