//NaN = Not a Number
//isNaN() function to verify if value is actually NaN.

console.log(isNaN(NaN)); // true

console.log(isNaN(undefined)); //true

console.log(isNaN({})); //true

console.log(isNaN(true)); //false

console.log(isNaN(null)); //false

console.log(isNaN("42")); //false //converts "42" to 42 and 42 is a number

console.log(isNaN("42abc")); // true //can't convert "42abc" to Number
