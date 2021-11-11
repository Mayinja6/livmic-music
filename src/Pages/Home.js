import HeroImg from '../assets/hero-image.png';
import '../styles/Home.css';

const Home = () => {
	return (
		<section className="hero-section">
			<div className="hero-content">
				<h1>Home of Live Music && Albums.</h1>
				<h2>Website for Live Musicians, DJs, Concert Pianists among others.</h2>
				<p>
					Got a favourite Musician, Check out their Album!!!, or even
					better,their Attire
				</p>
				<div className="hero-btns">
					<a href="/albums">
						<button>ARTIST ALBUMS</button>
					</a>
					<a href="/attires">
						<button>ATTIRE STORE</button>
					</a>
				</div>
			</div>
			<div className="hero-image">
				<img src={HeroImg} alt="Main Img" />
			</div>
		</section>
	);
};

export default Home;
