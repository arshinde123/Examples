/*
	Array accessor methods -	1) concat()
														2) join()
														3) slice()
														4) toString()
														5) indexOf()
														6) lastIndexOf()
*/


// 1) concat()
// with concat, you can combine two or more arrays into one.
// The original arrays being concatened remain untouched.
// The operation returns newly formed array with the concatened values in it.

var arr1, arr2, arr3, arr4;

arr1 = ['hello'];
arr2 = ['hi'];
arr3 = ['welcome'];
arr4 = arr1.concat(arr2,arr3);
console.log(arr4); // output: ['hello','hi', 'welcome']
//=======================================================


// 2) join()
// join takes the values in the array and joins them into a string.
// you can pass it parameter to specify which character/s to put in between values

var nums = [1,2,3,4,5];
console.log(nums.join(" is less than "));
// output: 1 is less than 2 is less than 3 is less than 4 is less than 5
//=======================================================


// 3) slice()
// slice will copy a part of an array and return it.
// Rather than modify the original array, it just makes a shallow copy.
// You tell it where to start and optionally where to end copying.

var sliceDemo = [1,2,3,4,5,6,7,8,9];
console.log(sliceDemo.slice(2,5)); //output: [ 3, 4, 5, 6, 7, 8, 9 ]
console.log("sliceDemo = " + sliceDemo);

var sliceDemo = [1,2,3,4,5,6,7,8,9];
console.log(sliceDemo.slice(-2)); //output: [8, 9 ] //-2 will start at the end

var sliceDemo = [1,2,3,4,5,6,7,8,9];
console.log(sliceDemo.splice(3,4)); //output: [4, 5, 6, 7]
//========================================================

// 4) toString()
// toString returns a string representing the array and its items:
// when array items are exclusively strings, they're simply concantenated in a
// comma-seperated list and returned. Numbers are first converted to strings.

var toStringDemo = ['hello', 'hi', 'welcome'];
console.log(toStringDemo.toString()); // output: hello,hi,welcome

var toStringDemo = ["a", "b", "c", 100, 200, 300, [1,2,3],{"foo":"bar"}];
console.log(toStringDemo.toString()); // output: a,b,c,100,200,300,1,2,3,[object Object]
//note: toString() flattens out the nested array.
//===========================================================


// 5) indexOf()
//indexOf will find the first instance of an item in an array and return its index to you.
// It does this using strict equality like ( === )
// syntax: array.indexOf(searchElement, [fromIndex]);
var alphabet;
alphabet = ["a", "b", "c", "a", "a", "b", "c", "b", "a"];
console.log(alphabet.indexOf("b")); // output: 1
console.log(alphabet.indexOf("b", 2)); // output: 5
//==============================================================



// 6) lastIndexOf()
// lastIndexOf works exactly like indexOf, but begins its search form the end of the array
// thus it will find last occurrence of the searchElement
var alphabet;
alphabet = ["a", "b", "c", "a", "a", "b", "c", "b", "a"];
console.log(alphabet.lastIndexOf("b")); // output: 7
console.log(alphabet.lastIndexOf("b", -4)); // output: 5
