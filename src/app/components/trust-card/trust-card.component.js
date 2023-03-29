import React from 'react';
import './trust-card.css';

function TrustCard({ img, keyPoints }) {
	return (
		<div className="trust-card center">
			<img src={img} alt="" className="trust-card-image" />
			<ul className="trust-card-list">
				{keyPoints.map((text) => (
					<li key={text} className="trust-card-list-item">
						{text}
					</li>
				))}
			</ul>
		</div>
	);
}

export default TrustCard;
