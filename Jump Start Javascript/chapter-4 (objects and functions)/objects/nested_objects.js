var person;
person = {
  name: {
    first: "Hugo",
    last: "Reyes"
  }
};
console.log(person.name.first); // returns "Hugo"
console.log(person.name.last);  // returns "Reyes"


var person;
person = {};
person.name = {};

person.name.first = "Hugo";
person.name.last = "Reyes";

console.log(person.name.first); // returns "Hugo"
console.log(person.name.last);  // returns "Reyes"
