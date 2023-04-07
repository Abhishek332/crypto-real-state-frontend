import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Context } from '../../utils/context-provider';
import { loadContracts } from '../../utils/load-contracts';
import LoadingIndicator from '../../components/loading-indicator/loading-indicator.component';
import BuildingLoader from '../../assets/building-loader.json';
import Header from '../../components/header/header.component';
import House1 from '../../assets/house1.webp';
import CardsContainer from '../../components/cards-container/cards-container.component';
import PropertyCard from '../../components/property-card/property-card.component';
import './my-property-page.css';

function MyPropertyPage() {
	const { address, contractInstance, setContract } = useContext(Context);
	const [myProperties, setMyProperties] = useState([]);
	const [loading, setLoading] = useState(true);

	const getMyProperties = useCallback(async () => {
		if (!contractInstance) {
			setLoading(true);
			const contract = await loadContracts();
			setContract(contract);
		}

		const fakeDelay = () => {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve();
				}, 1000);
			});
		};

		await fakeDelay();

		const totalProperties = await contractInstance?.methods
			.getNumberOfTokensMinted()
			.call();
		const tempProperties = [];

		for (
			let propertyIndex = 1;
			propertyIndex <= totalProperties;
			propertyIndex++
		) {
			const tempProperty = await contractInstance?.methods
				.allCryptostate(propertyIndex)
				.call();
			console.log(tempProperty);

			if (tempProperty.currentOwner.toLowerCase() === address.toLowerCase()) {
				tempProperties.push(tempProperty);
			}
		}

		setMyProperties(tempProperties);
		setLoading(false);
	}, [contractInstance, setContract, address]);

	useEffect(() => {
		getMyProperties();
	}, [getMyProperties]);

	if (loading) {
		return <LoadingIndicator indicator={BuildingLoader} />;
	}

	return (
		<div id="my-property-page">
			<Header title="My Properties" head background={House1} />
			{myProperties.length > 0 ? (
				<CardsContainer dataList={myProperties} child={PropertyCard} />
			) : (
				<p>You didn't buy any property yet.</p>
			)}
		</div>
	);
}

export default MyPropertyPage;
