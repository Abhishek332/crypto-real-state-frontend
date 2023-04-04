import React from 'react';
import './loading-indicator.css';
import Lottie from 'react-lottie';
import { Button } from '@mui/material';

const LoadingIndicator = ({
	indicator,
	text,
	image = false,
	buttonText = '',
	buttonAction,
}) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: indicator,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
		speed: 1,
	};

	return (
		<div id="loading-indicator" className="center">
			{image ? (
				<img className="image" src={indicator} alt="" />
			) : (
				<Lottie options={defaultOptions} height={275} width={275} />
			)}
			{text && <h1 style={{ color: '#0c4c94' }}>{text}</h1>}
			{buttonText && (
				<Button
					sx={{
						m: 2,
						backgroundColor: '#0c4c94',
					}}
					onClick={buttonAction}
					variant="contained"
				>
					{buttonText}
				</Button>
			)}
		</div>
	);
};

export default LoadingIndicator;
