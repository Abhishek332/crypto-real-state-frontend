import { useLocation } from 'react-router';
import { useState, useContext } from 'react';
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
import AlertDialog from '../../components/alert-dialog/alert-dialog.component';

const PropertyDetails = () => {
	const { contractInstance, address } = useContext(Context);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
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

	const openPopupForMetamaskConnection = () => {
		setIsDialogOpen(true);
		setTimeout(() => {
			setIsDialogOpen(false);
		}, 1200);
	};

	const putOrRemoveFromSale = async (e) => {
		if (!address) {
			openPopupForMetamaskConnection();
			return;
		}

		e.preventDefault();
		await contractInstance?.methods
			.toggleForSale(tokenId)
			.send({ from: address });
	};

	const changePrice = async (e) => {
		if (!address) {
			openPopupForMetamaskConnection();
			return;
		}

		e.preventDefault();
		let listingPrice = await contractInstance?.methods.getListingPrice().call();
		let p = propertyPrice / 2;
		const price = ethers.utils.parseUnits(p.toString(), 'ether');
		await contractInstance?.methods
			.changeTokenPrice(tokenId, price)
			.send({ from: address, value: listingPrice });
	};

	const buyProperty = (e) => {
		if (!address) {
			openPopupForMetamaskConnection();
			return;
		}

		e.preventDefault();
		const price = ethers.utils.parseUnits(propertyPrice.toString(), 'ether');
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

				<CardActions className="card-actions center" disableSpacing>
					{propertyOwner.toLowerCase() !== address ? (
						<>
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
						</>
					) : propertyOnSale ? (
						<Button variant="outlined" onClick={buyProperty}>
							BUY
						</Button>
					) : (
						<Typography
							paragraph
							sx={{
								fontWeight: 500,
								color: '#0c4c94',
								textShadow: '0 0 1px rgba(0,0,0, 5)',
							}}
						>
							NOT FOR SALE
						</Typography>
					)}
				</CardActions>
			</Card>
			<AlertDialog
				title="Metamask is not connected"
				text="Please connect your metamask account"
				isDialogOpen={isDialogOpen}
			/>
		</div>
	);
};

export default PropertyDetails;
