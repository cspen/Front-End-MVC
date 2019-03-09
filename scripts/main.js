
function Model() {
}
Model.prototype.update = function() {
	console.log("MODEL");
}


function View(model) {
	this.model = model;
}
View.prototype.update = function(event) {
	console.log("View");
	document.body.style.backgroundColor = getRandomColor();
}


function Controller(model, view) {
	this.model = model;
	this.view = view;
}
Controller.prototype.process = function(e) {
	e.preventDefault();
	// e.stopImmediatePropagation();
	console.log("Controller " + e.target.nodeName);
	this.model.update();
	this.view.update();
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

