import { useLocation } from 'react-router';
import { useContext } from 'react';
import {
	Card,
	CardMedia,
	CardActions,
	Button,
	Typography,
} from '@mui/material';
import './property-details.css';
import { Context } from '../../utils/context-provider';
import { ethers } from 'ethers';

const PropertyDetails = () => {
	const { contractInstance, address } = useContext(Context);
	const {
		state: {
			propertyName,
			propertyImage,
			propertyAddress,
			propertyPrice,
			propertyOwner,
			propertyOnSale,
			tokenId,
		},
	} = useLocation();

	const putOrRemoveFromSale = async (e) => {
		e.preventDefault();
		await contractInstance?.methods
			.toggleForSale(tokenId)
			.send({ from: address });
	};

	const changePrice = async (e) => {
		e.preventDefault();
		let listingPrice = await contractInstance?.methods.getListingPrice().call();
		let p = propertyPrice / 2;
		const price = ethers.utils.parseUnits(p.toString(), 'ether');
		await contractInstance?.methods
			.changeTokenPrice(tokenId, price)
			.send({ from: address, value: listingPrice });
	};

	const buyProperty = (e) => {
		e.preventDefault();

		const price = ethers.utils.parseUnits(propertyPrice.toString(), 'ether');
		console.log(address, price);
		contractInstance.methods
			.buyToken(tokenId)
			.send({ from: address, value: price });
	};

	return (
		<div id="property-details" className="center">
			<Card className="image" sx={{ height: 300, width: 400, padding: 1 }}>
				<CardMedia
					sx={{ height: '100%', objectFit: 'cover' }}
					image={propertyImage}
					title="Property Image"
				/>
			</Card>
			<Card className="details" sx={{ minWidth: 400, padding: 1 }}>
				<div className="center">
					<ul className="headings">
						<li>Property Name</li>
						<li>Property Address</li>
						<li>Property Price</li>
						<li>Property Owner</li>
					</ul>
					<ul className="headings">
						<li>:</li>
						<li>:</li>
						<li>:</li>
						<li>:</li>
					</ul>
					<ul className="values">
						<li>{propertyName}</li>
						<li>{propertyAddress}</li>
						<li>{propertyPrice} ETH</li>
						<li>{propertyOwner.substr(0, 30)}</li>
					</ul>
				</div>

				{propertyOwner.toLowerCase() === address ? (
					<CardActions disableSpacing>
						<Button className="btn" variant="outlined" onClick={changePrice}>
							Increase Price
						</Button>

						<Button
							className="btn"
							variant="outlined"
							onClick={putOrRemoveFromSale}
						>
							{propertyOnSale ? 'Remove from Sale' : 'Put on Sale'}
						</Button>
					</CardActions>
				) : (
					<CardActions disableSpacing>
						{propertyOnSale ? (
							<Button variant="outlined" onClick={buyProperty}>
								BUY
							</Button>
						) : (
							<Typography paragraph>Not for sale</Typography>
						)}
					</CardActions>
				)}
			</Card>
		</div>
	);
};

export default PropertyDetails;
