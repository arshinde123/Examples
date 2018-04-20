var hugo, person, names;
person = function () {
  return this.lastName;
};
hugo = person.bind({lastName: "Reyes"});
hugo(); // returns "Reyes"
names = {
  lastName: "Cooper",
  hugo: hugo,
  person: person
};
names.hugo(); // returns "Reyes"
names.person(); // returns "Cooper"        
