
function Model() {
	this.state;
	this.count = 0;
}
Model.prototype.update = function(data) {
	console.log("AJAX CALL " + this.count);
	this.count = this.count+1;


	// AJAX call goes here

	// Not all events necessarily require
	// an AJAX call, so I'm going to need
	// to rethink this design.

	// One idea is to use a flag variable
	// passed from the controller. However
	// this requires double logic since the
	// controller will set the flag and the
	// model will check the flag

	// Another idea is to have an ajax function
	// for AJAX calls and another function when
	// AJAX isn't needed - putting the decision
	// logic in the controller


	this.state = data;
}
Model.prototype.getState = function() {
	return this.state;
}

/**
 * The view updates the DOM and
 * element values.
 */
function View(model) {
	this.model = model;
}
View.prototype.update = function(action) {
	console.log("VIEW");
	var output = document.getElementById("output");
	output.value = this.model.getState();

	if(action) {
		document.body.style.backgroundColor = getRandomColor();
	}
}

/**
 * The controller decides which elements
 * are significant.
 */
function Controller(model, view) {
	this.model = model;
	this.view = view;

	// Elements we are interested in
	this.actionElements = ["A", "BUTTON", "INPUT", "SELECT",
		"OPTION", "TEXTAREA" ];

}
Controller.prototype.process = function(e) {	
	var etn = e.target;

	if(this.actionElements.includes(etn.nodeName)) {	
		e.preventDefault();
		e.stopImmediatePropagation();
	
		console.log("INPUT ELEMENT CLICKED");
		console.log("Controller " + e.target.id);

		// Call user defined function
		if(typeof functionName == 'function') { 
  			functionName(e); 
		}

		// Update model and view
		this.model.update(e.target.nodeName);
		this.view.update(true);
	} else { 
		// An insignificant element 
		// Code for testing - will be removed
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
window.onload = function(e) {}





function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
  	for (var i = 0; i < 6; i++) {
    		color += letters[Math.floor(Math.random() * 16)];
	}
  	return color;
}

