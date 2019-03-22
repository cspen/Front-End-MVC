
function Model() {
	this.state;
}
Model.prototype.update = function(data) {
	console.log("MODEL");


	// AJAX call goes here


	this.state = data;
}
Model.prototype.getState = function() {
	return this.state;
}


function View(model) {
	this.model = model;
}
View.prototype.update = function(action) {
	console.log("View");
	var output = document.getElementById("output");
	output.value = this.model.getState();

	if(action) {
		document.body.style.backgroundColor = getRandomColor();
	}
}


function Controller(model, view) {
	this.model = model;
	this.view = view;

	// Elements we are interested in
	this.actionElements = ["A", "BUTTON", "INPUT", "SELECT",
		"OPTION", "TEXTAREA" ];

}
Controller.prototype.process = function(e) {	
	var etn = e.target.nodeName;

	if(this.actionElements.includes(etn)) {	
		e.preventDefault();
		e.stopImmediatePropagation();
	
		console.log("INPUT ELEMENT CLICKED");
		console.log("Controller " + e.target.nodeName);

		// Call user defined function
		if(typeof functionName == 'function') { 
  			functionName(etn); 
		}

		this.model.update(e.target.nodeName);
		this.view.update(true);
	} else {
		this.model.update(e.target.nodeName);
		this.view.update(false);
	}
}


var model = new Model();
var view = new View(model);
var controller = new Controller(model, view);




// Capture all events
window.onclick = function(e) {
	controller.process(e);
}
window.onkeyup = function(e) {
	controller.process(e);
}
window.onmouseover = function(e) {
	controller.process(e);
}
window.onload = function(e) {
	alert("LOADED");
}

function functionName() {
	console.log("FUNCTION REACHED");
}




function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
  	for (var i = 0; i < 6; i++) {
    		color += letters[Math.floor(Math.random() * 16)];
	}
  	return color;
}

