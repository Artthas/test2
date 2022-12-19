'use strict'

const express = require('express');
const http = require("http");
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const app = express();
const server = http.createServer(app);

app.get(`/`, async (req, res) => {
	console.log('sdfbsdfbsdb');
	res.status(HttpCode.OK).json({
		'name': 'alexander',
		'surname': 'gnetov',
	});
});

app.use(express.json());
// app.use(
// 	cors({
// 		credentials: true,
// 		origin: 'http://localhost:3000/',
// 	})
// );

// wss://kaios-d.facebook.com/ws/0101032984?lid=7178247106250431838&exp=1&cm=deflate

const start = async () => {
	try {
		try {
			console.log(`Соединение с сервером установлено!`);
		} catch (err) {
			console.error(`Не удалось установить соединение по причине: ${err}`);
		}

		server.listen(PORT, () =>
			console.log(`Server started on PORT = ${PORT}`)
		);

	} catch (e) {
		console.log(e);
	}
};

start();
