const express = require('express');
const path = require('path');
var Rollbar = require('rollbar');

const app = express();
app.use(express.json());

const port = process.env.PORT || 4545;

// app.use(rollbar.errorHandler());

app.listen(port, () => console.log(`take us to warp ${port}`));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
	// rollbar.info('html file served succesfully');
});

app.listen(port, () => console.log(`take us to warp ${port}`));
