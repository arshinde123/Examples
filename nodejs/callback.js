/*
  What is Callback?
    - Callback is an asynchronous equivalent for a function.
    - A callback function is called at the completion of a given task.
    - Node makes heavy use of callbacks.
    - All the APIs of Node are written in such a way that they support callbacks.
*/

// blocking code example
console.log("blocking example");
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");


// non-blocking code example
console.log("non-blocking example");
var fs1 = require("fs");

fs1.readFile('input1.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");
