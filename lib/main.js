
var request = require('request');
var sep = require('path').sep;

module.exports = {
	fb_small: function(username, cb) {
	var r = request.get('https://graph.facebook.com/'+username+'/picture', function (err, res, body) {
if(err){
	cb(err);
} else {
	var info = {};
	var uri = res.request.uri ;
	info.host = uri.host;
	info.pathname = uri.pathname;
	info.href = uri.href;
	info.dpath = info.pathname.split(sep);
	info.dpath.splice(0,1); //delete the useless first empty element
	cb(null, info);	 
}
});
},
fb_large: function(username, cb) {
	var r = request.get('https://graph.facebook.com/'+username+'/picture?height=200&type=normal&width=200', function (err, res, body) {
if(err){
	cb(err);
} else {
	var info = {};
	var uri = res.request.uri ;
	info.host = uri.host;
	info.pathname = uri.pathname;
	info.href = uri.href;
	info.dpath = info.pathname.split(sep);
	info.dpath.splice(0,1); //delete the useless first empty element
	cb(null, info);	 
}
});  
	}
}