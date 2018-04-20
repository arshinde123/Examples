/*
	Array Mutator Methods -		1) pop()
														2) push()
														3) reverse()
														4) shift()
														5) unshift()
														6) sort()
														7) splice()
*/

// 1) pop()
// pop will remove the last element from the array and return it to you

var tasks_1 = ["Hello", "Hi", "Welcome"];
console.log(tasks_1.pop()); // output: Welcome

//=======================================================
// 2) push()
// push will add on item to the end of the array and return the arrays new length

var tasks_2 = ["Hello", "Hi", "Welcome"];
console.log(tasks_2.push("Good Morning")); // output: 4
console.log(tasks_2); // output: ["Hello", "Hi", "Welcome", "Good Morning"]
//=======================================================


// 3) reverse()
// reverse will reverse the order of the items in the array

var tasks_3 = ["Hello", "Hi", "Welcome"];
console.log(tasks_3.reverse()); // output: ["Welcome", "Hi", "Hello"]
console.log(tasks_3); // output: ["Welcome", "Hi", "Hello"]
//=======================================================

// 4) shift()
// shift removes the first item in the array and return it.

var tasks_4 = ["Hello","Hi","Welcome"];
console.log(tasks_4[0]); // output: Hello
console.log(tasks_4.shift()); // output: Hello
console.log(tasks_4[0]); // output: Hi
//=======================================================

// 5) sort()

// myArray.sort();

// sort sorts the items of an array in ascending order.
// sort algorithm is very basic,
// regardless of whether you're sorting strings or numbers,
// everything is converted into strings and then compared.
// for example, sorting of [3, 10, 1, 2] will result in [1, 10, 2, 3] instead of [1, 2, 3, 10]

// thankfully sort lets you pass in a custom comparison function:

// myArray.sort([compare])

var tasks_5 = ["Welcome", "Hello", "Hi"];
console.log(tasks_5.sort()); // output: ["Hello", "Hi", "Welcome"]
//=======================================================


// 6) splice()

var tasks_6 = ["Hello", "Hi", "Welcome"];
console.log(tasks_6.splice(1,1)); // output: [ 'hi']
console.log(tasks_6); // output: ['Hello', 'Welcome']
var tasks_6 = ["Hello", "Hi", "Welcome"];
console.log(tasks_6.splice(1,1,"WhatsUp")); // output: ['Hi']
console.log(tasks_6); // output: ['Hello', 'WhatsUp', 'Welcome']

var tasks_6 = ["Hello", "Hi", "Welcome"];
console.log(tasks_6.splice(1,1,"WhatsUp", "How are you", "What are you doing")); // output: ['Hi']
console.log(tasks_6); // output: ['Hello', 'WhatsUp', 'How are you', 'What are you doing', 'Welcome']

var tasks_6 = ["Hello", "Hi", "Welcome"];
console.log(tasks_6.splice(1,2)); // output: [ 'hi', 'Welcome']
console.log(tasks_6); // output: ['Hello']

var tasks_6 = ["Hello", "Hi", "Welcome"];
console.log(tasks_6.splice(0,2)); // output: ['Hello', 'hi']
console.log(tasks_6); // output: ['Welcome']
//=======================================================


// 7) unshift()

// unshift adds one or more items to the beginning of the array and returns the array's new length:

var tasks_7, len;
tasks_7 = ['Hello', 'Hi', 'Welcome'];
console.log(tasks_7.unshift("Good Morning","Hey")); // outpur: 5
