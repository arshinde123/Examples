// The keyword throw is used to signal an error condition

throw expression; // it takes this form

throw "This is an error in the form of a string"
//while it is syntactically valid to throw an exception this way
//the preferred format is to explicitly use an Error object.

function divideBy(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('Denominator must be non zero');
    //An error object provides more information than a string.
  }
  return numerator / denominator;
}
console.log(divideBy(12,0));

/*
output:
  Error: Denominator must be non zero
  ...
  ...
  ...
   .
   .
   .
*/
