import '../styles/Contact.css';
import guitar from '../assets/unsplash.jpg';

const Contact = () => {
	return (
		<section className="contact-section">
			<img src={guitar} alt="guitar" />

			<form>
				<div>
					<label htmlFor="names">Full Name</label>
					<input type="text" id="names" placeholder="Enter Full Names..." />
				</div>
				<div>
					<label htmlFor="email">Full Name</label>
					<input type="email" id="email" placeholder="Enter Email Address..." />
				</div>
				<div>
					<label htmlFor="textarea">Your Message</label>
					<textarea placeholder="Message" id="textarea"></textarea>
				</div>

				<button type="submit">SEND MESSAGE</button>
			</form>
		</section>
	);
};

export default Contact;
