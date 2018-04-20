"use strict"
function test() {
   {
      var num1 = 100
      console.log("value of num in test() "+num1) // 100
      let num2 = 200
      console.log("value of num : "+num2) // 200
   }
   console.log("value of num : "+num1) // No Error
   //console.log("value of num : "+num2) // Error: num2 is not defined
}
test()
// ===============================

// following is allowed
var no = 1;
var no = 2;
console.log("no = "+no);

// following is not allowed gives Error
let no = 1;
var no = 2;
console.log("no = "+no);

let no = 1;
let no = 2;
console.log("no = "+no);
