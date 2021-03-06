'use strict'
const express = require('express');  
const bodyParser = require('body-parser');
var path = require('path')
const app = express();


//Set port to 5000 or an evironmentally allocated port
app.set('port', (process.env.PORT || 5000))

//serve static files in the public directory
app.use(express.static('public'));
app.use(express.static('node_modules'));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))

//Process application/json
app.use(bodyParser.json())
 
/**
 * Home page for interval captures
 */
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/face_only', function (req, res) {
	res.sendFile(path.join(__dirname, '/face_only.html'));
})

app.get('/colours', function (req, res) {
	res.sendFile(path.join(__dirname, '/color_detect.html'));
})


var server = app.listen(app.get('port'), function () {
    var host = server.address().address
	console.log('Application running on port', app.get('port'))
})