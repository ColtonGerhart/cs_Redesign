module.exports=function(app) {

	var express=require('express');
	var sanitizer=require('sanitizer');

	app.use('/js', express.static(__dirname + '/javascript'));
	
	var multiparty = require('multiparty');
	var monk = require('monk');
	
	var fs = require('fs');

	var credentials = require('./credentials');

	var db = monk(credentials.username + ":" + credentials.password + '@hbgwebfe.hbg.psu.edu:27017/gmm5153');

	var userCollection = db.get('DemoCol10');

	app.use('/bin/processAddToDB', function(req, res, next) {		
	//app.get('/addToDB', function(req, res, next) {
   		// We must generate a new session ID to prevent session fixation attacks
   		req.session.regenerate(function(err) {
       		if (err)
           		console.log("Error during session regeneration: " + err);
   		});


		
		var form = new multiparty.Form({uploadDir : __dirname + '/../temp'});
		
		form.parse(req, function(err, fields, files) {
			if(err){
			console.log(err);
			}
			//console.log(fields);
			//console.log(files);
			//console.log(fields.uname[0]);
			//console.log(fields.uname.value);
			
			Object.keys(fields).forEach(function(value) {
				console.log('got value named ' + value);
			});
			
			Object.keys(files).forEach(function(name) {
			//console.log('got file named ' + name);
			});
			
			//console.log(files.img[0].path);
			var tmp_path =  sanitizer.sanitize(files.img[0].path);
			var target_path = './public/uploads/' + sanitizer.sanitize(files.img[0].originalFilename);
			
			fs.rename(tmp_path, target_path, function(err) {
				if (err) return;
				// delete the temporary file, so that the explicitly set temporary upload dir does not get filled with unwanted files
				fs.unlink(tmp_path, function() {
					if (err) return;
				});
			});
			
			var uTemp = sanitizer.sanitize(fields.uname[0]);
			var iTemp = target_path;
			
			var data = {demoText:uTemp, demoImg:iTemp };
			
			userCollection.insert(data, function(err, result) {
				if (err) {
					res.status(500).send("Internal error.");
					console.error(err);
				} else {
					console.log('Insert Success');
					res.location('../home.html');
					res.redirect('../home.html');
				}
			});
			
		});
		
		

			
		
		

			
		
			
		var sess = req.session;

	});

};
