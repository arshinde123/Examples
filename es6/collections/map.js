// MAP

// The map object is a simple key/value pair.
// Keys and values in a map may be primitive  or objects.

// Maps are ordered, i.e. they traverse the elements in the order of their insertion.

//Following is the syntax for the same.

//new Map([iterable])
//The parameter iterable represents any iterable object whose elements comprise of a key/value pair
var roles = new Map([
   ['r1', 'User'],
   ['r2', 'Guest'],
   ['r3', 'Admin'],
]);
      //OR
var map = new Map();
map.set('name','Tutorial Point');

// size is property of MAP
//e.g myMap.size();
// This property returns the number of key/value pairs in the Map object.
//==============================================================================

//Basic Map Operations
//-------------------------------------------------------------------------------

//The set() function sets the value for the key in the Map object.
//The set() function takes two parameters namely, the key and its value.
//This function returns the Map object.

var map = new Map();
console.log(map.set('name','Tutorial Point')); //{ 'name' => 'Tutorial Point' }
console.log(map.get('name')); // Tutorial point

// Note − Maps distinguish between similar values but bear different data types.
// In other words, an integer key 1 is considered different from a string key “1”.
// Consider the following example to better understand this concept

var map = new Map();
map.set(1,true);
console.log(map.has("1")); //false

map.set("1",true);
console.log(map.has("1")); //true
//The has() function returns a boolean value indicating
//whether the specified key is found in the Map object.
//This function takes a key as parameter.


/*
Note −
The get() function returns undefined if the key specified doesn’t exist in the map.
The set() replaces the value for the key, if it already exists in the map. Consider the following example.
*/
//==============================================================================

//Map methods

//1 clear
var myMap = new Map();
myMap.set("id", "admin");
myMap.set("pass", "admin@123");
myMap.clear();
//Removes all key/value pairs from the Map object.

//2  delete
var myMap = new Map();
myMap.set("id", "admin");
myMap.set("pass", "admin@123");
myMap.delete("id");
//Removes any value associated to the key and returns the this deleted value

//3 entries
var myMap = new Map();
myMap.set("id", "admin");
myMap.set("pass", "admin@123");

var itr = myMap.entries();
console.log(itr.next().value); //id,admin
console.log(itr.next().value); //pass,admin@123

// 4 userdetails
function userdetails(key,value) {
   console.log("m[" + key + "] = " + value);
}
var myMap = new Map();
myMap.set("id", "admin");
myMap.set("pass", "admin@123");
myMap.forEach(userdetails);

//5 keys
var myMap = new Map();
myMap.set("id", "admin");
myMap.set("pass", "admin@123");

var itr = myMap.keys();
console.log(itr.next().value); //id
console.log(itr.next().value); //pass

//6 values
var myMap = new Map();
myMap.set("id", "admin");
myMap.set("pass", "admin@123");

var itr = myMap.values();
console.log(itr.next().value); //admin@123
console.log(itr.next().value); //admin


// the for...of loop
'use strict'
var roles = new Map([
   ['r1', 'User'],
   ['r2', 'Guest'],
   ['r3', 'Admin'],
]);
for(let r of roles.entries())
console.log(`${r[0]}: ${r[1]}`);
/*
output:
  r1: User
  r2: Guest
  r3: Admin
*/
//==============================================================================

//Weak Maps

/*
A weak map is identical to a map with the following exceptions −

    Its keys must be objects.

    Keys in a weak map can be Garbage collected.

    A weak map cannot be iterated or cleared.
*/
'use strict'
let weakMap = new WeakMap();
let obj = {};
console.log(weakMap.set(obj,"hello")); // WeakMap {}
console.log(weakMap.get(obj)); //hello
console.log(weakMap.has(obj));// true
