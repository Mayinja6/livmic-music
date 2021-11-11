import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Albums from './Pages/Albums';
import Attires from './Pages/Attires';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/albums" exact element={<Albums />} />
					<Route path="/about" exact element={<About />} />
					<Route path="/attires" exact element={<Attires />} />
					<Route path="/contact" exact element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
