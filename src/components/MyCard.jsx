/*src/componentts/MyCard.jsx*/

import Card from 'react-bootstrap/Card';
import Tags from './Tags';
import '../App.css';

const MyCard = ({ image, nombre, descripcion, colorBadge, textBadge }) => {
	return (
		<Card style={{ width: '18rem', height: '28rem' }} className="my-card">
			<Card.Img variant="top" src={image} className="my-card-img" />
			<Card.Body className="my-card-body">
				<Card.Title>{nombre}</Card.Title>
				<Card.Text>{descripcion}</Card.Text>
				<Tags colorBadge={colorBadge} textBadge={textBadge} />
			</Card.Body>
		</Card>
	);
};
export default MyCard;
