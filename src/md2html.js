var marked = require('marked');
var pygmentize = require('pygmentize-bundled');

marked.setOptions({
	highlight: function(code,lang,callback){
		pygmentize({lang: lang, format: 'html'},code, function(err,result){
			callback(err,result.toString());
		});
	}
});

exports.md2html = function(data,callback){
	marked(data,function(err,content){
		return callback(err,content);
	});
}

