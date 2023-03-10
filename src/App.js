import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
	const [gifts, setGifts] = useState(data);
	const removeGift = (id) => {
	const newGifts = gifts.filter((gift) => gift.id !== id);
	setGifts(newGifts);
	};

	return (
		<div>
			<div className="container">
				<h1>List of {gifts.length}</h1>
			</div>
			{gifts.map((element) => {
				const { id, gifty, image } = element;
				return (
					<div key={id}>
						<div className="container">
							<h2>
								{id} - {gifty}
							</h2>
						</div>
						<div className="container">
							<img src={image} width="300px" alt="gift" />
						</div>
						<div className="container">
							<button onClick={() => removeGift(id)}>remove</button>
						</div>
					</div>
				);
			})}
			<div className="container">
				<button onClick={() => setGifts([])}>delete all</button>
			</div>
		</div>
	);
}

export default App;
