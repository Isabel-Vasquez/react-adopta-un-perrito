/* App.jsx */
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	const cardsData = [
		{
			image: './src/assets/img/pexels-dominika-roseclay-2023384.jpg',
			nombre: 'Docky',
			descripcion:
				'Hermoso perrito, cariñoso, juguetón y coqueton. Busca un hogar acogedor.',
			colorBadge: 'warning',
			textBadge: 'Husky',
		},
		{
			image: '../src/assets/img/dog-5357794_1280.jpg',
			nombre: 'Garu',
			descripcion:
				'Lleno de energia para jugar. Busca un hogar amoroso para recibir mucho amor.',
			colorBadge: 'dark',
			textBadge: 'Bobtall',
		},
		{
			image: './src/assets/img/pexels-iresha-ratnayake-4084988.jpg',
			nombre: 'Luna',
			descripcion: 'Educada y buena compañera y tranquila. Busca hogar.',
			colorBadge: 'success',
			textBadge: 'Shar pel',
		},
		{
			image: './src/assets/img/pexels-vanserline-vandenberg-1619690.jpg',
			nombre: 'Princesa',
			descripcion:
				'Adorable, amigable, le gusta mucho jugar con los niños y demas perritos. Busca hogar',
			colorBadge: 'info',
			textBadge: 'Beagle',
		},
	];

	return (
		<>
			<Header title="Adopta un perrito" />
			<div className="my-grid">
				{cardsData.map((card, index) => (
					<div key={index}>
						<MyCard {...card} />
					</div>
				))}
			</div>
			<Footer />
		</>
	);
}

export default App;
