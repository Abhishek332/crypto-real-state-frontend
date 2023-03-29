import React from 'react';
import './contact-us.css';

function ContactUs() {
	return (
		<section className="contact">
			<h1 className="contact-heading">Contact Us</h1>
			<form className="contact-form center">
				<div className="input-group">
					<label>Full Name *</label>
					<input
						type="text"
						className="contact-input"
						placeholder="Enter Your Name"
					/>
				</div>
				<div className="input-groups">
					<div className="input-group">
						<label>Email *</label>
						<input
							type="email"
							className="contact-input"
							placeholder="Enter Your Email"
						/>
					</div>
					<div className="input-group">
						<label>Phone</label>
						<input
							type="text"
							className="contact-input"
							placeholder="Enter Phone Number"
						/>
					</div>
				</div>
				<div className="input-group">
					<label>Message</label>
					<textarea
						className="form-textarea"
						placeholder="Your Message Here..."
					></textarea>
				</div>
				<input type="submit" value="Submit" className="form-btn" />
			</form>
		</section>
	);
}

export default ContactUs;
