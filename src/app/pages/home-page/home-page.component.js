import React from 'react';
import './home-page.css';
import HomeCard from '../../components/Card/homeCard';
import Contectus from '../../components/Contact/contactus';
import IndiaLogo from '../../components/india-logo/india-logo.component';
import Header from '../../components/header/header.component';
import House from '../../assets/house.jpeg';

function Home() {
	const cardInfo = [
		{
			img: 'https://as1.ftcdn.net/v2/jpg/02/10/17/26/1000_F_210172606_04K3sGd9NqyMiH6rZfmxjUkDCChrHxy7.jpg',
			text: [
				'Written in solidity',
				'Audited by  Deloitte',
				'Tested by Quick Hilles',
			],
		},
		{
			img: 'https://thumbs.dreamstime.com/b/illustration-vector-ethereum-logo-long-shadow-illustration-vector-ethereum-logo-long-shadow-cryptocurrency-113135110.jpg',
			text: [
				'Security of Ethereum',
				'Validate buy proof of stack',
				'No tempering issue',
			],
		},
		{
			img: 'https://logopeople.in/blog/wp-content/uploads/2013/01/government-of-india.jpg',
			text: [
				'Opreated by GOVT OF INDIA',
				'Deparetement of Real state GOI',
				'Total Listed Property 1M',
			],
		},
	];

	return (
		<div>
			<Header logo={IndiaLogo} background={House}>
				<div className="header-text">
					<h1 className="heading">Around the India</h1>
					<p className="header-paragraph">
						"crypto state - “Where Dreams Come Home & become secure”
					</p>
				</div>
			</Header>
			<section className="popular-tours">
				<h1 className="popular-tours-heading">The Process of Verificatoin</h1>
				<div className="cards-wrapper">
					{cardInfo.map((data) => (
						<HomeCard data={data} />
					))}
				</div>
			</section>
			<Contectus />
		</div>
	);
}

export default Home;
