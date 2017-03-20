function inherits(Child, Parent) {
	// create empty proxy-function
	let F = function() {};
	
	// assign Parent.prototype to prototype of this empty proxy-function
	F.prototype = Parent.prototype;

	// create new object and assign it to the Child.prototy
	// Child.prototype is empty object
	Child.prototype = new F();

	// Child.prototype.constructor set to Child
	Child.prototype.constructor = Child;

	// each class should know about its parent
	Child.superClass_ = Parent.prototype;
}
