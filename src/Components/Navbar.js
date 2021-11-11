import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import svg from '../assets/menu.svg';
import { useState } from 'react';
const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	return (
		<>
			<header>
				<Link className="logo" to="/">
					<img src={Logo} alt="Logo" />
					<span>LIVMIC</span>
				</Link>
				<nav>
					<a href="/">Home</a>
					<a href="/albums">Albums</a>
					<a href="/attires">Attires</a>
					<a href="/about">About</a>
					<a href="/contact">Contact</a>
				</nav>
				<img
					src={svg}
					alt="Svg"
					className="svg"
					onClick={() => {
						setNavbar(!navbar);
					}}
					style={
						navbar
							? { transform: 'rotate(90deg)' }
							: { transform: 'rotate(0deg)' }
					}
				/>
			</header>
			{navbar ? (
				<nav className="navbar2">
					<a href="/">Home</a>
					<a href="/albums">Albums</a>
					<a href="/attires">Attires</a>
					<a href="/about">About</a>
					<a href="/contact">Contact</a>
				</nav>
			) : (
				<span></span>
			)}
		</>
	);
};

export default Navbar;
