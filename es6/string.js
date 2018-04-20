//template literals ( string inside back-ticks)

//Example 1
var name = "Brendan";
console.log('Hello, ${name}!');

//Example 2: Template literals and expressions
var a = 10;
var b = 10;
console.log(`The sum of ${a} and ${b} is  ${a+b} `);
//The following output is displayed on successful execution of the above code.
//The sum of 10 and 10 is 20

//Example 3: Template literals and function expression
function fn() { return "Hello World"; }
console.log(`Message: ${fn()} !!`);
//The following output is displayed on successful execution of the above code.
//Message: Hello World !!
//Multiline Strings and Template Literals
//Template strings can contain multiple lines.

//Example
var multiLine = `
   This is
   a string
   with multiple
   lines`;
console.log(multiLine)

//================================================================

//new string methods
str.startsWith(searchString, position = 0)
//Returns true if the receiver starts with searchString;
//the position lets you specify where the string to be checked starts.

str.endsWith(searchString, endPosition = searchString.length)
//Returns true if the receiver starts with searchString;
//the position lets you specify where the string to be checked starts.

str.includes(searchString, position = 0)
//Returns true if the receiver contains searchString;
//position lets you specify where the string to be searched starts.

str.repeat(count)
//prints the str given number of count times.
//========================================================


//========================================================
//string methods

charAt();
//Returns the character at the specified index.

charCodeAt();
//Returns a number indicating the Unicode value of the character at the given index.

concat();
//Combines the text of two strings and returns a new string.

indexOf();
//Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.

lastIndexOf();
//Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.

localeCompare();
//Returns a number indicating whether a reference string comes before or after or is the same as the given string in a sorted order.

match();
//Used to match a regular expression against a string.

replace();
//Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.

search();
//Executes the search for a match between a regular expression and a specified string.

slice();
//Extracts a section of a string and returns a new string.

split();
//Splits a String object into an array of strings by separating the string into substrings.

substr();
//Returns the characters in a string beginning at the specified location through the specified number of characters.

substring();
//Returns the characters in a string between two indexes into the string.

toLocaleLowerCase()
//The characters within a string are converted to lower case while respecting the current locale.

toLocaleupperCase()
//The characters within a string are converted to uppercase while respecting the current locale.

toLowerCase()
//Returns the calling string value converted to lowercase.

toString()
//Returns a string representing the specified object.

toUpperCase()
//Returns the calling string value converted to uppercase.

valueOf()
//Returns the primitive value of the specified object.
//=====================================================================================

//String.raw()

//ES6 includes the tag function String.raw for raw strings,
//where backslashes have no special meaning. String.raw enables us to write the backslash
//as we would in a regular expression literal.
//Consider the following example.

var text =`Hello \n World`
console.log(text)

var raw_text = String.raw`Hello \n World `
console.log(raw_text)

/*The following output is displayed on successful execution of the above code.
Hello
World
Hello \n World*/

String.fromCodePoint()
//The static String.fromCodePoint() method returns a string created by
//using the specified sequence of unicode code points.
//The function throws a RangeError if an invalid code point is passed.

console.log(String.fromCodePoint(42))
console.log(String.fromCodePoint(65, 90))

/*
The following output is displayed on successful execution of the above code.

*
AZ

42-->* 65--->A 90--->Z
*/
