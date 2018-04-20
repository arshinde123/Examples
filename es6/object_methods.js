
//The Object.create Method

//Objects can also be created using the Object.create() method.
//It allows you to create the prototype for the object you want,
//without having to define a constructor function.

//Example
var roles = {
   type: "Admin", // Default value of properties
   displayType : function() {
      // Method which will display type of role
      console.log(this.type);
   }
}

// Create new role type called super_role

var super_role = Object.create(roles);
super_role.displayType(); // Output:Admin

// Create new role type called Guest
var guest_role = Object.create(roles);
guest_role.type = "Guest";
guest_role.displayType(); // Output:Guest
roles.displayType();

//The above example defines an object -roles and sets the default values for the properties.
// Two new instances are created that override the default properties value for the object.

//====================================================================================


//The Object.assign() Function

//The Object.assign() method is used to copy the values of all enumerable own properties
//from one or more source objects to a target object.
//It will return the target object.

//Following is the syntax for the same.
//Object.assign(target, ...sources)

//Example − Cloning an Object

"use strict"
var det = { name:"Tom", ID:"E1001" };
var copy = Object.assign({}, det);
console.log("inside cloning");
console.log(det); //output: { name: 'Tom', ID: 'E1001' }
console.log(copy); //output: { name: 'Tom', ID: 'E1001' }

copy.name="Arvind";

console.log(det); //output: { name: 'Tom', ID: 'E1001' }
console.log(copy); // output: { name: 'Arvind', ID: 'E1001' }
for (let val in copy) {
   console.log(copy[val]) // output: Tom
                          //         E1001
}


//======================================================================


//Example − Merging Objects

var o1 = { a: 10 };
var o2 = { b: 20 };
var o3 = { c: 30 };
console.log("inside merging");
console.log(o1);
var obj = Object.assign(o1, o2, o3);
console.log("o1 is :");
console.log(o1);    //output: { a: 10, b: 20, c: 30 }
console.log("obj is :");
console.log(obj);   //output: { a: 10, b: 20, c: 30 }

console.log("after changing obj.a");
obj.b = 50;
console.log("o1 is :");
console.log(o1);  //output: { a: 10, b: 50, c: 30 }
console.log(o2);  //output: { b: 20}
console.log("obj is :");
console.log(obj); //output: { a: 10, b: 50, c: 30 }

//Note − Unlike copying objects, when objects are merged,
//the larger(obj) object doesn’t maintain a new copy of the properties.
//Rather it holds the reference to the properties contained in the (o1)original objects.
//The following example explains this concept.

var o1 = { a: 10 };
var obj = Object.assign(o1);
obj.a++
console.log("Value of 'a' in the Merged object after increment  ")
console.log(obj.a);   //output: 11
console.log("value of 'a' in the Original Object after increment ")
console.log(o1.a);   //output: 11
//==============================================================================

//Deleting Properties

//You can remove a property by using the delete operator.
//The following code shows how to remove a property.
//Example
// Creates a new object, myobj, with two properties, a and b.
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;
// Removes the ‘a’ property
//delete myobj.a;
console.log ("a" in myobj) // yields "false"

//The code snippet deletes the property from the object.
//The example prints false as the in operator doesn’t find the property in the object.
//==============================================================================

//Comparing Objects
//In JavaScript, objects are a reference type.
//Two distinct objects are never equal, even if they have the same properties.
//This is because, they point to a completely different memory address.
//Only those objects that share a common reference yields true on comparison.

//Example 1 − Different Object References
var val1 = {name: "Tom"};
var val2 = {name: "Tom"};
console.log(val1 == val2)  // return false
console.log(val1 === val2)  // return false

//In the above example, val1 and val2 are two distinct objects that refer to two different memory addresses.
//Hence on comparison for equality, the operator will return false.

//Example 2 − Single Object Reference

var val1 = {name: "Tom"};
var val2 = val1

console.log(val1 == val2) // return true
console.log(val1 === val2) // return true
//============================================================================

//Object De-structuring
//The term destructuring refers to breaking up the structure of an entity.
//The destructuring assignment syntax in JavaScript makes it possible to extract data from arrays or objects
//into distinct variables.
//The same is illustrated in the following Example

var emp = { name: 'John', Id: 3 }
var {name, Id} = emp
console.log(name) //output: John
console.log(Id) // 3
