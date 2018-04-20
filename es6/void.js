//This operator specifies an expression to be evaluated without returning a value.
//The operator evaluates a given expression and then returns undefined.

void function iife_void() {
   var msg = function () {console.log("hello world")};
   msg();
}();
