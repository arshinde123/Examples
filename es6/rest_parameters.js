// Rest parameters are similar to variable arguments in Java.
// Rest parameters doesn’t restrict the number of values that you can pass to a function.
// However, the values passed must all be of the same type.
// In other words, rest parameters act as placeholders for multiple arguments of the same type.

// To declare a rest parameter,
// the parameter name is prefixed with three periods, known as the spread operator.
// The following example illustrates the same.

function fun1(...params) {
   console.log(params.length);
}
fun1();
fun1(5);
fun1(5, 6, 7);

/*
The following output is displayed on successful execution of the above code.
0
1
3
*/
// Note − Rest parameters should be the last in a function’s parameter list.
