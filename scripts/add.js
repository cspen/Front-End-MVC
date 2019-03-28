function functionName(etn) {

	console.log(" * * * * " + etn.type);
	if(etn.target.nodeName === "A") {
		if(etn.target.id == "click-link") {
			console.log("LINK CLICKED");
		}
	} else if(etn.target.nodeName === "INPUT") {
		if(etn.target.id == "output") {
			console.log("OUTPUT");
		}
	}
}
