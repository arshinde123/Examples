var person, lastName;
lastName = "Reyes";
person = function() {
  return this.lastName;
};

console.log(person()); // returns undefined

console.log(person.apply({lastName: "Cooper"})); // returns 'Cooper'
//==============================================================

var tax;
tax = function(price, provincial, federal) {
	console.log(price);
	console.log(provincial);
	console.log(federal);
	console.log(this.applyDemo);
  return price * provincial * federal;
};
console.log(tax.apply({applyDemo:200},[100, 1.05, 1.095])); // returns 114.975
//=================================================================

var tax;
tax = function(price, provincial, federal) {
	console.log(price);
	console.log(provincial);
	console.log(federal);
  return price * provincial * federal;
};
console.log(tax.apply(null,[100, 1.05, 1.095])); // returns 114.975
