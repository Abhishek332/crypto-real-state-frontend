import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import './property-card.css';

const PropertyCard = ({
	currentOwner,
	forSale,
	perviousOwner,
	placeAddress,
	price,
	tokenId,
	tokenURI,
	tokenName: placeName,
}) => {
	return (
		<div className="property-card">
			<Card sx={{ width: 345 }}>
				<CardMedia
					component="img"
					height="140"
					image={tokenURI}
					alt="Property Image"
				/>
				<CardContent align="left">
					<Typography variant="h6" color="text.secondary">
						<strong>Owner: </strong>
						{currentOwner.substr(0, 30)}
					</Typography>
					<Typography variant="h6" color="text.secondary">
						<strong>Price: </strong>
						{price} ETH
					</Typography>
					<Typography variant="h6" color="text.secondary">
						<strong>Token: </strong>
						{placeName}
					</Typography>
				</CardContent>
				<CardActions>
					<Link
						to="/property-details"
						state={{
							owner: currentOwner,
							forSale,
							oldowner: perviousOwner,
							address: placeAddress,
							price,
							tokenId,
							Image: tokenURI,
							Place: placeName,
							// owner: pro?.owner,
							// price: pro?.price,
							// Place: pro?.placename,
							// Image: pro?.tokenURI,
							// address: pro?.place,
							// oldowner: pro?.oldOwener,
							// tokenId: pro?.tokenId,
							// forSale: pro?.forSale,
						}}
					>
						<Button size="small">
							More Info
							<ArrowForwardIosIcon />
						</Button>
					</Link>
				</CardActions>
			</Card>
		</div>
	);
};

export default PropertyCard;
