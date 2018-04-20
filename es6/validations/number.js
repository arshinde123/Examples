//The Number object represents numerical date, either integers or floating-point numbers.
//In general, you do not need to worry about Number objects
//because the browser automatically converts number literals to instances of the number class.

// creating number object
var val = new Number(number);
// note: in the place of number, if you provide any non-number argument,
//then the argument cannot be converted into a number,
//it returns NaN (Not-a-Number).
//======================================================================

//Number methods

Number.isNaN();
Number.isFinite();
Number.isInteger();
Number.isSafeInteger();//Determines whether the passed value is a safe integer (number between -(253 - 1) and 253- 1)
Number.parseFloat();
Number.ParseInt();
//===========================================================================

//Number instances Methods

toExponential();
//Returns a string representing the number in exponential notation

toFixed();
//Returns a string representing the number in fixed-point notation

toLocaleString();
//Returns a string with a language sensitive representation of this number

toPrecision();
//Returns a string representing the number to a specified precision in fixed-point or exponential notation

toString();
//Returns a string representing the specified object in the specified radix (base)

valueOf();
//Returns the primitive value of the specified object.

//=================================================================

//Binary and Octal Literals

//Before ES6, your best bet when it comes to binary or octal representation of integers
//was to just pass them to parseInt() with the radix.
//In ES6, you could use the 0b and 0o prefix to represent binary and octal integer literals respectively.
//Similarly, to represent a hexadecimal value, use the 0x prefix.

//The prefix can be written in upper or lower case.
//However, it is suggested to stick to the lowercase version.

//Example − Binary Representation
console.log(0b001) // output: 1
console.log(0b010) //output: 2

//Example − hexadecimal Representation
console.log(0x010) // output: 16
console.log(0x100) // output: 256
