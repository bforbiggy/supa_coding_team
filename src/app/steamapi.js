const SteamAPI = require('steamapi');
const steam = new SteamAPI('steam token');
steam.resolve('https://steamcommunity.com/id/DimGG').then(id => {
	console.log(id)});