
function Model() {
	this.state;
}
Model.prototype.update = function(data) {
	console.log("MODEL");
	// AJAX calls go here
	this.state = data;
}
Model.prototype.getState = function() {
	return this.state;
}


function View(model) {
	this.model = model;
}
View.prototype.update = function(event) {
	console.log("View");
	var output = document.getElementById("output");
	output.value = this.model.getState();
	document.body.style.backgroundColor = getRandomColor();
}


function Controller(model, view) {
	this.model = model;
	this.view = view;
	this.elementsToIgnore = ["FORM", "B", "I", "EM", "P"];

}
Controller.prototype.process = function(e) {
	
	var etn = e.target.nodeName;
	if(!this.elementsToIgnore.includes(etn)) {	
		e.preventDefault();
		e.stopImmediatePropagation();
	
		console.log("INPUT ELEMENT CLICKED");
		console.log("Controller " + e.target.nodeName);

		this.model.update(e.target.nodeName);
		this.view.update();
	}
}

var model = new Model();
var view = new View(model);
var controller = new Controller(model, view);

// Capture all click events
window.onclick = function(e) {
	controller.process(e);
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
  	for (var i = 0; i < 6; i++) {
    		color += letters[Math.floor(Math.random() * 16)];
	}
  	return color;
}

