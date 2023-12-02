import express from 'express'
import cors from 'cors'
import { database, randomGame, registerUser } from './database.js';

const app = express();
const port = 3000;

app.use(cors())
app.get('/', (req, res) => {
	res.send('Use the /steamgame route!');
})

app.get('/steamgame', async (req, res) => {
	const app_id = req.headers.app_id ?? randomGame();
	const detailResponse = await fetch(`https://store.steampowered.com/api/appdetails?appids=${app_id}`);
	const reviewResponse = await fetch(`https://store.steampowered.com/appreviews/${app_id}?json=1&purchase_type=all&filter_offtopic_activity=0&day_range=365`);

	const detailData = await detailResponse.json();
	const reviewData = await reviewResponse.json();
	res.type('json');
	res.send({
		app_id: app_id,
		name: detailData[app_id].data.name,
		reviews: [...reviewData.reviews]
	});
})

app.get('/login', async (req, res) => {
	res.type('json');

	// No id_token, no login
	if (!req.headers.token) {
		res.send({
			error: 'No authentication provided'
		});
		return;
	}

	// Find matching user
	for (let user of database.users) {
		if (user.token === req.headers.token) {
			res.send(user);
			return;
		}
	}

	// User not found
	res.send({
		error: "User not found"
	})
})

app.get('/register', async (req, res) => {
	res.type('json');

	// No id_token, no login
	if (!req.headers.id_token) {
		res.send({
			error: 'No authentication provided'
		});
		return;
	}

	// Retrieve user details
	const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${req.headers.id_token}`);
	if (!response.ok) {
		res.send({
			error: 'Failed to retrieve user details'
		});
		return;
	}

	// Register user
	const gdata = await response.json();
	const entry = registerUser(gdata);
	res.send(entry);
})

app.listen(port, () => {
	console.log(`Backend listening: Port ${port}`)
})