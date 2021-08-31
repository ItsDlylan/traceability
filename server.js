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

const port = process.env.PORT || 4000;

app.use(rollbar.errorHandler());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
	rollbar.info('html file served succesfully');

	// Try catch to catch error
	try {
		functionNotReal();
	} catch (err) {
		rollbar.critical(err);
	}
});
app.get('/js', (req, res) => {
	res.sendFile(path.join(__dirname, './public/script.js'));
	rollbar.info('index.js file served succesfully');
});

app.listen(port, () => console.log(`take us to warp ${port}`));
