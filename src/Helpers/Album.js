import '../styles/Album.css';

const Album = ({ name, price, ratings, image, artist, views }) => {
	return (
		<div className="album">
			<div
				className="album-img"
				style={{ backgroundImage: `url(${image})` }}></div>
			<h2>{name}</h2>
			<h4>
				By <span>{artist}</span>
			</h4>
			<h3>
				<span>$</span>
				{price} Only
			</h3>
			<button>ORDER NOW</button>
			<small className="rate">{ratings} Stars</small>
			<small>{views} Views</small>
		</div>
	);
};

export default Album;
