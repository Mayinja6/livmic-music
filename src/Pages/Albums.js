import AlbumList from '../Components/AlbumList';
const Albums = () => {
	return (
		<section className="albums-section">
			<h1>Welcome To the Collection Of Albums</h1>
			<AlbumList />
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

export default Albums;
