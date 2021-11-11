import '../styles/About.css';
import contact from '../assets/contact.png';

const About = () => {
	return (
		<section className="about-section">
			<div className="about-content">
				<h1>LIVMIC MUSIC CO.</h1>
				<h2>Where your Celebrities come together.</h2>
				<p>
					It was found in the late 90's where
					<span> Pedro Traversy Rolling</span> who was to be the first Chairman
					of this Company.
				</p>
				<p>
					After some years <span>P T Rolling</span> was Upgraded to being the
					C.E.O of this Company and since the he has been gathering artists and
					bringing them to together thus colaboration
				</p>
				<p>
					<span>PT Rolling</span> also has an Album that was createdd in the
					late 90's and featured every artist by then, If you wanna check it
					out, become a Pro Member
				</p>
				<button>PRO MEMBERSHIP</button>
			</div>
			<img src={contact} alt="contact" />
		</section>
	);
};

export default About;
