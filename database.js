import * as fs from 'fs';

const dbFile = "database.json";
const file = fs.readFileSync(dbFile, 'utf8');
let database = JSON.parse(file);

// Select random element
function randomGame() {
	let index = Math.floor(Math.random() * database.games.length);
	return database.games[index];
}

// Duh
function saveDatabase() {
	fs.writeFileSync(dbFile, JSON.stringify(database));
}

// Find user by token
function findUser(token) {
	for (let user of database.users)
		if (user.token === token)
			return user;
	return null;
}

// Registers account using google data
function registerUser(gdata) {
	const entry = {
		token: `${gdata.name}${gdata.email}`,
		name: gdata.name,
		email: gdata.email
	};

	// Check if user already exists
	for (let user of database.users) {
		if (user.email === gdata.email)
			return entry;
	}

	// Add user
	database.users.push(entry);
	saveDatabase();
	return entry;
}


// Get user's current game (generating it if it doesn't exist)
function getUserGame(token) {
	const user = findUser(token);
	if (!user) return;

	// Generate game if unavailable
	if (!user.game) {
		user.game = {
			...randomGame(),
			guesses: 0
		}
		saveDatabase();
	}

	return user.game;
}

// Performs a guess
function userGuess(token, guess) {
	const user = findUser(token);
	if (!user) return;

	// Correct Guess: Save to history and reset game
	if (user.game.name === guess) {
		console.log(user.game.name, guess);
		user.history.push(user.game);
		delete user.game;
		saveDatabase();
		return true;
	}
	// Wrong Guess: increase guess count
	else {
		user.game.guesses++;
		saveDatabase();
		return false;
	}
}

export { database, saveDatabase, registerUser, randomGame, getUserGame, userGuess }