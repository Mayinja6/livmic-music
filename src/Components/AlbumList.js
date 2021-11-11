import { ListOfAlbums } from '../Helpers/SaleContent';
import Album from '../Helpers/Album';

const AlbumList = () => {
	const albumStyles = {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '50px 0',
	};
	const btnStyles = {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	return (
		<>
			<div style={albumStyles}>
				{ListOfAlbums.map((album, key) => {
					return (
						<Album
							key={key}
							name={album.name}
							price={album.price}
							ratings={album.ratings}
							image={album.image}
							artist={album.artist}
							views={album.views}
						/>
					);
				})}
			</div>
			<div style={btnStyles}>
				<button>ADD ALBUM</button>
				<button>SELL ALBUM</button>
			</div>
		</>
	);
};

export default AlbumList;
