import React from 'react';
import './loading-indicator.css';
import Lottie from 'react-lottie';

const LoadingIndicator = ({ indicator }) => {
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
		<div id="loading-indicator" class="center">
			<Lottie options={defaultOptions} height={275} width={275} />
		</div>
	);
};

export default LoadingIndicator;
