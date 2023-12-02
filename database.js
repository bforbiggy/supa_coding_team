import fs from 'fs';

const dbFile = "database.js";
let data;

function loadDatabase() {
	const file = fs.readFileSync(dbFile);
	return JSON.parse(file);
}

function saveDatabase() {
	fs.writeFileSync(dbFile, JSON.stringify(data));
}

// Initialization
data = loadDatabase();


export { data }