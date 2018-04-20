/*
	Array Iterator methods - 	1) forEach()
														2) map()
														3) every()
														4) some()
														5) filter()

														6) reduce()
														7) reduceRight()
*/

// 1) forEach() --- javascipt 1.6 and higher

// each time forEach steps over a number in the array,
//it passes it to this function as num
var arr, total;
arr = [4, 8, 15, 16, 23, 42];
total = 0;
arr.forEach(function(num) {
  total = total + num;
});
console.log("The total is: " + total); //The total is: 108
//===================================================

// 2) map() --- javascipt 1.6 and higher
// The map is identical to forEach.
// The only difference is that map returns an array
//containing the values returned by the callback function

var arr = [1, 2, 3, 4, 5];
var squared;
squared = arr.map(function(num) {
  return (num * num);
});
console.log(squared); // output: [1, 4, 9, 16, 25]

var arr = [{firstName:"Arvind", lastName:"Shinde" }, {fistName:"Sanjay", lastName:"Boralkar"}];

var squared;
squared = arr.map(function(num) {
  console.log(num); // {firstName:"Arvind", lastName:"Shinde" }, {fistName:"Sanjay", lastName:"Boralkar"}
  return num;
});
console.log(squared); // [{firstName:"Arvind", lastName:"Shinde" }, {fistName:"Sanjay", lastName:"Boralkar"}]
//==============================================


// 3) every() --- javascipt 1.6 and higher
var arr, isValid;
arr = [1, 2, 3, 4, 5];
isValid = arr.every(function(num) {
  return (num < 10);
});

console.log(isValid); // output: true
isValid = arr.every(function(num) {
  return (num < 3);
});
console.log(isValid); // output: false
//=====================================

// 4) some() --- javascipt 1.6 and higher
var arr, isValid;
arr = [1, 2, 3, 4, 5];
isValid = arr.some(function(num) {
  return (num < 3);
});
console.log(isValid); // output: true
//========================================

// 5) filter() --- javascipt 1.6 and higher

var arr, filtered;
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
filtered = arr.filter(function(num) {
  return (num < 5);
});
console.log(filtered); // output: [ 1, 2, 3, 4 ]
//===================================================


// 6) reduce() and reduceRight() --- javascipt 1.8 and higher
//for first time previous is a[o] and current is a[1] if initial value for previous is not provided
//then for first time previous is initial value provided by us and current is a[0]
// later previous is a value returned by callback function and current is a[i]

var arr, total;
arr = [1, 2, 3, 4, 5];
total = arr.reduce(function(previous, current) {
  console.log("previous = "+previous);
  console.log("current = "+current);
  return previous + current;
},10); // initial value we passed is 10 then output: 25
console.log(total); // output: 15

//reduceRight() is exactly same as reduce() but works in reverse way.

total = arr.reduceRight(function(previous, current) {
  return previous + current;
});
console.log(total); // output: 15
