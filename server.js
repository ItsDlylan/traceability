const express = require('express');
const path = require('path');
var Rollbar = require('rollbar');
var rollbar = new Rollbar({
	accessToken: 'a670c7d8243845c29afafff46ff0e8bf',
	captureUncaught: true,
	captureUnhandledRejections: true,
});

const app = express();
app.use(express.json());

const port = process.env.PORT || 4545;

app.use(rollbar.errorHandler());

app.listen(port, () => console.log(`take us to warp ${port}`));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
	rollbar.info('html file served succesfully');
});

app.listen(port, () => console.log(`take us to warp ${port}`));
