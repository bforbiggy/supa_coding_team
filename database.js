import * as fs from 'fs';

const dbFile = "database.json";
const file = fs.readFileSync(dbFile, 'utf8');
let database = JSON.parse(file);

function saveDatabase() {
	fs.writeFileSync(dbFile, JSON.stringify(database));
}

// Registers account using google data
function registerUser(gdata) {
	const entry = {
		token: `${gdata.name}${gdata.email}`,
		name: gdata.name,
		email: gdata.email
	};

	for (let user of database.users) {
		if (user.email === gdata.email)
			return entry;
	}

	database.users.push(entry);
	saveDatabase();
	return entry;
}

// Select random element
function randomGame() {
	let index = Math.floor(Math.random() * database.app_ids.length);
	return database.app_ids[index];
}

export { database, saveDatabase, registerUser, randomGame }