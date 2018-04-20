var obj = {};
obj.firstName = "Hugo";
obj.lastName = "Reyes";
console.log(obj.firstName); // output: Hugo


var obj = {};
obj.firstName = "Hugo";
console.log(obj[0]); // returns undefined
console.log(obj["firstName"]);  // returns "Hugo"
console.log(obj.firstName);    // returns "Hugo"
