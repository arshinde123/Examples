//A set is an ES6 data structure.
//It is similar to an array with an exception that it cannot contain duplicates.
//In other words, it lets you store unique values.
//Sets support both primitive values and object references.
//Just like maps, sets are also ordered, i.e. elements are iterated in their insertion order.

var mySet = new Set('tom','jim','jack');
var tot = mySet.size;
console.log(tot); // 3


// add() method
var set = new Set();
set.add(10);
set.add(10); // duplicate not added
set.add(10); // duplicate not added
set.add(20);
set.add(30);
console.log(set.size); // 3

// clear() method
var mySet = new Set('tom','jim','jack');
mySet.clear()
var tot = mySet.size;
console.log(tot); // 0

// delete()
var set = new Set();
set.add(10);
set.add(20);
set.add(30);
console.log(`Size of Set before delete() :${set.size}`); // 3
console.log(`Set has 10 before delete() :${set.has(10)}`); // true

set.delete(10)
console.log(`Size of Set after delete() :${set.size}`); // 2
console.log(`Set has 10 after delete() :${set.has(10)}`) // false

// entries()
var mySet = new Set();
mySet.add("Jim");
mySet.add("Jack");
mySet.add("Jane");

var itr = mySet.entries()
console.log(itr.next().value); // [ 'Jim', 'Jim' ]
console.log(itr.next().value); // [ 'Jack', 'Jack' ]
console.log(itr.next().value); // [ 'Jane', 'Jane' ]

// forEach() method
function userdetails(values) {
   console.log(values);
}
var mySet = new Set();
mySet.add("John");
mySet.add("Jane");
mySet.forEach(userdetails);
/*
  output: John
          Jane
*/

// has() method
var mySet = new Set();
mySet.add("Jim");
console.log(mySet.has("Jim")); // true
console.log(mySet.has("Tom")); // false

//values() method
var mySet = new Set();
mySet.add("Jim");
mySet.add("Jack");
mySet.add("Jane");
console.log("Printing keys()------------------");

var keyitr = mySet.keys();
console.log(keyitr.next().value);
console.log(keyitr.next().value);
console.log(keyitr.next().value);
console.log("Printing values()------------------");

var valitr = mySet.values();
console.log(valitr.next().value);
console.log(valitr.next().value);
console.log(valitr.next().value);
/*
output:
    Printing keys()------------------
    Jim
    Jack
    Jane
    Printing values()------------------
    Jim
    Jack
    Jane
*/
//========================================================================//

//Weak Sets
//Weak sets can only contain objects, and the objects they contain may be garbage collected.
//Like weak maps, weak sets cannot be iterated.

'use strict'
   let weakSet = new WeakSet();
   let obj = {msg:"hello"};
   weakSet.add(obj);
   console.log(weakSet.has(obj)); // true
   weakSet.delete(obj);
   console.log(weakSet.has(obj)); //false
//========================================================================//
