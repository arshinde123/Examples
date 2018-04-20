//regular expression is an object that describes a pattern of characters.
//Regular expressions are often abbreviated “regex” or “regexp”.

//The JavaScript RegExp class represents regular expressions,
//and both String and RegExp define methods that use regular expressions
//to perform powerful pattern-matching and search-and-replace functions on the text.

//A regular expression can be defined as −
var pattern = new RegExp(pattern, attributes);
OR
var pattern = /pattern/attributes;

/* Attributes:

  // G - Global Match

  // I - Ignore case

  // M - Multiline; treat the beginning and end characters (^ and $)
  //     as working over multiple lines (i.e., match the beginning or
  //     the end of each line (delimited by \n or \r),
  //     not only the very beginning or end of the whole input string)

  // U - Unicode; treat the pattern as a sequence of unicode code points

  // Y - Sticky; matches only from the index indicated by the lastIndex property of this RegExp
  //     in the target string (and does not attempt to match from any later indexes)
*/

//==============================================================================


//Constructing Regular Expressions

//Brackets ([]) have a special meaning when used in the context of regular expressions.
//They are used to find a range of characters.

//Expression & Description
//1   [...] Any one character between the brackets
//2   [^...] Any one character not between the brackets
//3   [0-9] It matches any decimal digit from 0 through 9
//4 [a-z] It matches any character from lowercase a through lowercase z
//5 [A-Z] It matches any character from uppercase A through uppercase Z
//6 [a-Z] It matches any character from lowercase a through uppercase Z
