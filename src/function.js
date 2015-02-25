var fs = require('fs');

function func(){
	this.getBloglist = function (blogDir){
		var blogList = [];
		var files = fs.readdirSync(blogDir);
		for(var j= 0; j < files.length;j++){
				var fileInfo = files[j].split('-');
				var len = fileInfo.length;
				var blogTitle = fileInfo[len-1];
				blogTitle = blogTitle.replace('.md','');
				var blogUrl = "./blogs/"+fileInfo[0]+
						'/'+fileInfo[1]+
						'/'+fileInfo[2]+
						'/'+blogTitle;
				var blogItem = {title: blogTitle, url:blogUrl}
				blogList.push(blogItem);
		}
		// console.log(blogList);
		return blogList;
	}
}

module.exports = func