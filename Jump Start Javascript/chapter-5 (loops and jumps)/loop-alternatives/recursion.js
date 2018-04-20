//using loop approach
function factorial(num) {
  var result = 1;
  for (var i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}
console.log(factorial(5)); // output: 120

//using recursion approach
function factorial(num) {
  if (1 === num) {
    return num;
  }
  else {
    return num * factorial(num - 1);
  }
}
console.log(factorial(5)); // output: 120
