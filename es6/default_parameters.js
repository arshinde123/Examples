// Default function parameters

//In ES6, a function allows the parameters to be initialized with default values,
//if no values are passed to it or it is undefined.
//The same is illustrated in the following code.

function add(a, b = 1) {
   return a+b;
}
console.log(add(4)) // 5

//The above function, sets the value of b to 1 by default.
//The function will always consider the parameter b to bear the value 1 unless a value has been explicitly passed. The following output is displayed on successful execution of the above code.

//The parameter’s default value will be overwritten if the function passes a value explicitly.

function add(a, b = 1) {
   return a + b;
}
console.log(add(4,2)) // 6

//The above code sets the value of the parameter b explicitly to 2,
//thereby overwriting its default value.
