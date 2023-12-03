import express from 'express'
import cors from 'cors'
import { database, getUserGame, registerUser, userGuess } from './database.js';

const app = express();
const port = 3000;

app.use(cors())
app.get('/', (req, res) => {
	res.send('View the right routes in repo!');
})

app.get('/steamgame', async (req, res) => {
	res.type('json');

	// No token, no login
	if (!req.headers.token) {
		res.send({
			error: 'No authentication provided'
		});
		return;
	}

	const app_id = getUserGame(req.headers.token).app_id;
	const reviewResponse = await fetch(`https://store.steampowered.com/appreviews/${app_id}?json=1&purchase_type=all&filter_offtopic_activity=0&day_range=365`);
	const reviewData = await reviewResponse.json();
	res.send({
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

app.get('/guess', async (req, res) => {
	res.type('json');

	// No token, no login
	if (!req.headers.token) {
		res.send({
			error: 'No authentication provided'
		});
		return;
	}

	// Check guess
	const result = userGuess(req.headers.token, req.headers.guess);
	res.send({
		result: result
	})
})

app.listen(port, () => {
	console.log(`Backend listening: Port ${port}`)
})