import express from 'express'
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors())
app.get('/', (req, res) => {
	res.send('Use the /steamgame route!');
})

app.get('/steamgame', async (req, res) => {
	const app_id = `${1832640}`;
	const detailResponse = await fetch(`https://store.steampowered.com/api/appdetails?appids=${app_id}`);
	const reviewResponse = await fetch(`https://store.steampowered.com/appreviews/${app_id}?json=1`);

	const detailData = await detailResponse.json();
	const reviewData = await reviewResponse.json();
	res.type('json');
	res.send({
		app_id: app_id,
		name: detailData[app_id].data.name,
		reviews: [...reviewData.reviews]
	});
})

app.listen(port, () => {
	console.log(`Backend listening: Port ${port}`)
})