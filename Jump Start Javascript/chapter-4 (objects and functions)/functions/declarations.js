/*
  3 ways to create functions

    1) function statement (or declaration)
    2) function operator (or expression)
    3) Function constructor
      //Function() constructor returns a new Function object
*/

//Note: please note a difference between fun declaration and fun expression

// declaration
// function declarations are hoisted just as variables are
function sayHello1() {
  console.log("Hello");
}
sayHello1();

// expression
//variables declaration of function expression is hoisted only
var sayHello2 = function() {
  console.log("Hello");
};
sayHello2();

// constructor (not recommended)
var sayHello3 = new Function("console.log('Hello')");
sayHello3();




//examples
alert(hi());
function hi() {
  return "Hi!";
}      // no error as whole hi() is hoisted

alert(hey());
var hey = function () {
  return "Hey!";
};     // error as only variables of hey will be hoisted
