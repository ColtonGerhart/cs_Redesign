var express = require('express');
var session = require('express-session');
var https = require('https');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
var sanitizer=require('sanitizer');

app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));


var sessionStore = session({secret: 'sssh!', cookie: { maxAge: 600000}, resave: true, saveUninitialized: true });
app.use(sessionStore);

app.use(express.static(__dirname));
	
var fileTest = require('./javascript/FileTest');
//app.use('/FileTest', fileTest); 
fileTest(app, express);

var addToDB = require('./javascript/addToDB');
//app.use('/addToDB', addToDB);
addToDB(app, express);

var getContent = require('./javascript/getContent');
getContent(app, express);

app.use(function( req, res, next) {
    console.log('%s %s Path: %s OriginalUrl: %s', req.method, req.url, req.path, req.originalUrl);

	next();
});

/*app.get('/', function (req, res) {
	res.location("index.html");
	res.redirect("index.html");
});

app.get('/index', function (req, res) {
	res.location("index.html");
	res.redirect("index.html");
});*/




var options = {
   key: fs.readFileSync('key.pem'),
   cert: fs.readFileSync('cert.pem')
};

https.createServer(options, app).listen(6006);

console.log('LISTENING!')


