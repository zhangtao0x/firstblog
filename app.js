var express = require('express');
var app = express();
var fs = require('fs');
var func = require('./src/function.js');
var md = require('./src/md2html');

app.get('/',function(req,res){
	var html = '';
	var Func = new func();
	var blogList = Func.getBloglist('./blogs');
	if(blogList && blogList.length){
		blogList.forEach(function(blog){
			html += '<a href="'+blog.url+'">'+blog.title+'</a><br/>';
		});
		res.send(html);
	}else{
		res.send('No blogs found');
	}
	
})


app.get('/blogs/:year/:month/:day/:title',function(req,res){
	var filename=
		'./blogs/'+
		req.params.year+'-'+
		req.params.month+'-'+
		req.params.day+'-'+
		req.params.title+'.md';
	fs.readFile(filename,'utf-8',function(err,data){
		if(err)
			res.send(err);
		else
			md.md2html(data,function(err,content){
				if(err) res.send(err);
				res.send(content);
			});
	});
})

app.get('*',function(req,res){
	res.send('404 Not Found.');
})
app.listen(3000);