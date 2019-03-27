function functionName(etn) {

	console.log(" * * * * " + etn.type);
	if(etn.nodeName === "A") {
		if(etn.id === "click-link") {
			alert("LINK CLICKED");
		}
	} else if(etn.nodeName === "INPUT") {
		if(etn.id === "output") {
			alert("OUTPUT");
		}
	}
}
