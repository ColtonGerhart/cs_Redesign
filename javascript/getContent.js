module.exports=function(app) {

	var express=require('express');
	var sanitizer=require('sanitizer');

	//app.use('/js', express.static(__dirname + '/javascript'));

	var monk = require('monk');

	var credentials = require('./credentials');

	var db = monk(credentials.username + ":" + credentials.password + '@hbgwebfe.hbg.psu.edu:27017/gmm5153');

	var userCollection = db.get('DemoCol10');

	//app.use('/bin/processGetContent', function(req, res, next) {		
	app.get('/getContent', function(req, res, next) {
   		// We must generate a new session ID to prevent session fixation attacks
		console.log('Please say hello to me');
   		req.session.regenerate(function(err) {
       		if (err)
           		console.log("Error during session regeneration: " + err);
   		});
   		//userCollection.remove({});
		userCollection.find({demoText: { $exists: true} }, function(err, aggregate) {
			if (err) {
				res.status(500).send("Internal error.");
				console.error(err);
			} else if (aggregate){
				aggregate.reverse();
				console.log(aggregate);
				res.send(aggregate);
	
			} else {
				console.log('No entries found.');
			}
		});			
	});
};
