module.exports=function(app) {

	var express=require('express');
	var sanitizer=require('sanitizer');

	app.use('/js', express.static(__dirname + '/javascript'));
	app.use(express.static(__dirname + '/../public', {index: ['FileTest.html', 'FileTest.htm']}));
	/*
	var monk = require('monk');

	var credentials = require('./credentials');

	var db = monk(credentials.username + ":" + credentials.password + '@hbgwebfe.hbg.psu.edu:27017/gmm5153');

	var userCollection = db.get('UserlistCollection2');

	app.use('/bin/processFileTest', function(req, res, next) {		

   		// We must generate a new session ID to prevent session fixation attacks
   		req.session.regenerate(function(err) {
       		if (err)
           		console.log("Error during session regeneration: " + err);
   		});

		var uTemp = sanitizer.sanitize(req.body.uname);
   
		userCollection.find({DemoText: { $exists: true} }, function(err, aggregate) {
			if (err) {
				res.status(500).send("Internal error.");
				console.error(err);
			} else if (aggregate > 0){

				res.send(aggregate);
	
			} else {
				console.log('No entries found.');
			}
		});
		
			

		
	}); */

	
};

