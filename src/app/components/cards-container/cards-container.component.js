import React from 'react';
import './cards-container.css';

function CardsContainer({ heading, dataList, child: Child }) {
	return (
		<section>
			{heading && <h1>{heading}</h1>}
			<div className="cards-wrapper center">
				{dataList.map((data) => (
					<Child key={Math.random().toString()} {...data} />
				))}
			</div>
		</section>
	);
}

export default CardsContainer;
