//Lambda Functions

// Lambda refers to anonymous functions in programming.
// Lambda functions are a concise mechanism to represent anonymous functions.
// These functions are also called as Arrow functions.

//Lambda Function - Anatomy
/*There are 3 parts to a Lambda function −

    1 - Parameters − A function may optionally have parameters.

    2 - The fat arrow notation/lambda notation (=>): It is also called as the goes to operator.

    3 - Statements − Represents the function’s instruction set.
*/
//Tip − By convention,
//the use of a single letter parameter is encouraged for a compact and precise function declaration.

//===========================================================================

//Lambda Expression

//It is an anonymous function expression that points to a single line of code.
//Following is the syntax for the same.
//([param1, parma2,…param n] ) => statement;

//Example − Lambda Expression
var foo = (x)=>10+x;
console.log(foo(10)); // 20

//The Example declares a lambda expression function.
//The function returns the sum of 10 and the argument passed.

//===========================================================================


//Lambda Statement
// It is an anonymous function declaration that points to a block of code.
// This syntax is used when the function body spans multiple lines.
// Following is the syntax of the same.

/*
( [param1, parma2,…param n] )=> {
   //code block
}
*/

// Example − Lambda Statement
var msg = ()=> {
   console.log("function invoked") // output: function  invoked
}
msg()

// The function’s reference is returned and stored in the variable msg.


//Syntactic Variations
//Optional parentheses for a single parameter.
var msg = x=> {
   console.log(x) //10
}
msg(10)

//Optional braces for a single statement.
//Empty parentheses for no parameter.

var disp = ()=>console.log("Hello World") // Hello World
disp();

/*
  // this is not valid
  var disp = =>console.log("Hello World")
  disp();
*/
