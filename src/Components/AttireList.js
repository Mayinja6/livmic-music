import Attire from '../Helpers/Attire';
import { ListOfAttires } from '../Helpers/SaleContent';

const AttireList = () => {
	const attireStyle = {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '50px 0',
	};
	return (
		<div style={attireStyle}>
			{ListOfAttires.map((attire, key) => {
				return (
					<Attire
						key={key}
						name={attire.name}
						img={attire.image}
						description={attire.description}
					/>
				);
			})}
		</div>
	);
};

export default AttireList;
