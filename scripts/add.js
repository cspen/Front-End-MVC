function functionName(etn) {

	console.log(" * * * * " + etn.type);
	if(etn.target.nodeName === "A") {
		if(etn.target.id == "click-link") {
			console.log("LINK CLICKED");
		}
		view.default(etn.target);
	} else if(etn.target.nodeName === "INPUT") {
		if(etn.target.id == "output") {
			console.log("OUTPUT");			
		}
		view.default(etn.target);
	} else if(etn.target.nodeName === "CANVAS") {
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = getRandomColor();
		ctx.fillRect(0, 0, canvas.width, canvas.height)

	}
	
}
