var pic = require("../");
 
pic.fb('bhanu423',function(err, info){
	if(err){
		console.log(err);
	} else{
		console.log(info);
	}
})