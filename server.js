var express = require('express');

app = express();

var path = require('path');

var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './client')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded());

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(8000, function(){
	console.log('listening on port 8000');
})
