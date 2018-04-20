var person = {
   firstname:"Tom",
   lastname:"Hanks",
   func:function(){return "Hello!!"},
};
//access the object values
console.log(person.firstname)
console.log(person.lastname)
console.log(person.func())
/*
output:
  Tom
  Hanks
  Hello!!
*/



//In ES6, assigning a property value that matches a property name, you can omit the property value.
//Example
var foo = 'bar'
var baz = { foo }
console.log(baz.foo)
//The above code snippet defines an object baz.
//The object has a property foo.
//The property value is omitted here as ES6 implicitly assigns the value of the variable foo to the object’s key foo.

//Following is the ES5 equivalent of the above code.

var foo = 'bar'
var baz = { foo:foo }
console.log(baz.foo)




// Using a Function Constructor

function Car() {
  this.make = "Ford"
  this.model = "F123"
}
var obj = new Car()
console.log(obj.make) //output: Ford
console.log(obj.model) //output: F123

//The above example uses a function constructor to define an object.

//A new property can always be added to a previously defined object.
//For example, consider the following code snippet −

function Car() {
  this.make = "Ford"
}
var obj = new Car()
obj.model = "F123"
console.log(obj.make)
console.log(obj.model)
