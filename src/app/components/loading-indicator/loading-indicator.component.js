import React from 'react';
import './loading-indicator.css';
import Lottie from 'react-lottie';

const LoadingIndicator = ({ indicator, text, image = true }) => {
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
		</div>
	);
};

export default LoadingIndicator;
