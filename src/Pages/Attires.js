import AttireList from '../Components/AttireList';

const Store = () => {
	return (
		<section className="attire-section">
			<h1>Experience Attires Just Like your Favourite Stars!</h1>
			<AttireList />
			<p>
				You didn't find what you want, Go a head and
				<a href="/contact" style={{ color: '#4c4f8a' }}>
					contact us
				</a>
				, We will get it for You right away.
			</p>
		</section>
	);
};

export default Store;
