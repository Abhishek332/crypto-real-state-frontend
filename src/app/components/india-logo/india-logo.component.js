import React from 'react';
import './india-logo.css';

const IndiaLogo = () => {
	return (
        <div className="india-logo">
		<h1 >
			<span>
				<img
					style={{
						width: 'inherit',
						borderRadius: '50%',
					}}
					className="ts"
					src="https://media.istockphoto.com/id/1032066158/vector/india-round-flag-vector-flat-icon.jpg?s=612x612&w=0&k=20&c=cZO8Tq3HkrD1AZ3tGXYCHBq1S4oO5hrqrRaxKua1P5k="
					alt=""
				/>
			</span>
			<span className="center">I</span>
			<span className="center">N</span>
			<span className="center">D</span>
			<span className="center">I</span>
			<span className="center">A</span>
		</h1>
        </div>  
	);
};

export default IndiaLogo;
