import React from 'react';
import './varification-process.css';
import HomeCard from '../../components/Card/homeCard';

function VarificationProcess() {
	const cardInfo = [
		{
			img: 'https://as1.ftcdn.net/v2/jpg/02/10/17/26/1000_F_210172606_04K3sGd9NqyMiH6rZfmxjUkDCChrHxy7.jpg',
			text: [
				'Written in solidity',
				'Audited by  Deloitte',
				'Tested by Quick Hills',
			],
		},
		{
			img: 'https://thumbs.dreamstime.com/b/illustration-vector-ethereum-logo-long-shadow-illustration-vector-ethereum-logo-long-shadow-cryptocurrency-113135110.jpg',
			text: [
				'Security of Ethereum',
				'Validate Buy Proof of Stack',
				'No tempering issue',
			],
		},
		{
			img: 'https://logopeople.in/blog/wp-content/uploads/2013/01/government-of-india.jpg',
			text: [
				'Operated by GOVT OF INDIA',
				'Department of Real State GOI',
				'Total Listed Property 1M',
			],
		},
	];

	return (
		<section>
			<h1>The Process of Varification</h1>
			<div className="card-wrapper center">
				{cardInfo.map((data) => (
					<HomeCard data={data} />
				))}
			</div>
		</section>
	);
}

export default VarificationProcess;
