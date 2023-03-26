import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Context } from '../../utils/context-provider';
import { loadContracts } from '../../utils/load-contracts';
import LoadingIndicator from '../../components/loading-indicator/loading-indicator.component';
import BuildingLoader from '../../assets/building-loader.json';
import Header from '../../components/header/header.component';
import House1 from '../../assets/house1.webp';
import CardsContainer from '../../components/cards-container/cards-container.component';
import PropertyCard from '../../components/property-card/property-card.component';
import './property-page.css';

function PropertyPage() {
	const { contractInstance, setContract } = useContext(Context);
	const [allProperties, setAllProperties] = useState([]);
	const [loading, setLoading] = useState(true);

	const getAllProperties = useCallback(async () => {
		if (!contractInstance) {
			setLoading(true);
			const contract = await loadContracts();
			setContract(contract);
		}

		await setTimeout(() => {}, 10000);

		const totalProperties = await contractInstance.methods
			.getNumberOfTokensMinted()
			.call();
		const tempProperties = [];

		for (
			let propertyIndex = 1;
			propertyIndex <= totalProperties;
			propertyIndex++
		) {
			tempProperties.push(
				await contractInstance.methods.allCryptostate(propertyIndex).call()
			);
		}

		setAllProperties(tempProperties);
		setLoading(false);
	}, [contractInstance, setContract]);

	useEffect(() => {
		getAllProperties();
	}, [getAllProperties]);

	if (loading) {
		return <LoadingIndicator indicator={BuildingLoader} />;
	}

	return (
		<div id="property-page">
			<Header title="Properties" head background={House1} />
			<CardsContainer dataList={allProperties} child={PropertyCard} />
		</div>
	);
}

export default PropertyPage;
