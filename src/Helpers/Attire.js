import '../styles/Attire.css';

const Attire = ({ name, img, description }) => {
	return (
		<div className="attire">
			<div className="image" style={{ backgroundImage: `url(${img})` }}></div>
			<div className="atire-content">
				<h2>{name}</h2>
				<p>{description}</p>
				<button>ATTAIN</button>
			</div>
		</div>
	);
};

export default Attire;
