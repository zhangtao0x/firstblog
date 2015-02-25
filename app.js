var express = require('express');
var app = express();
var fs = require('fs');

app.get('/blogs/:year/:month/:day/:title',function(req,res){
	console.log(req);
	var fileName = './blogs/' + 
			req.params.year+'-'+
			req.params.month+'-'+
			req.params.day+'-'+
			req.params.title+'.md';
	fs.readFile(fileName,'utf-8',function(err,data){
		if(err) res.send(err);
		res.send(data);
	})
})

app.listen(3000);