//The Boolean object represents two values, either "true" or "false".
//If the value parameter is omitted or is 0, -0, null, false, NaN,
//undefined, or the empty string (""), the object has an initial value of false.

Use the following syntax to create a boolean object.

var val = new Boolean(value);


//boolean methods
toSource();
//Returns a string containing the source of the Boolean object;
//you can use this string to create an equivalent object.

toString();
//Returns a string of either "true" or "false" depending upon the value of the object.

valueOf()
//Returns the primitive value of the Boolean object.
