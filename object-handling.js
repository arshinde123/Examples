// Task 1
var key = [ "firstname", "lastname" , "email" , "birthdate" ];

var value = [ "Harry" , "Potter" , "harry@hogwarts.co", "07-31-1997" ];

//Task 2
var harry = {};

for(var i=0; i<key.length;i++){
  harry[key[i]] = value[i];
}

var birthDate = new Date(value[3]);
console.log(birthDate);
var currDate = new Date();
var age = currDate.getFullYear() - birthDate.getFullYear();

harry.Age = age;
console.log(harry);

var newKey = [];
var newValue = [];

for (key in harry){
    newKey.push(key);
    newValue.push(harry[key]);
}

console.log(newKey);
console.log(newValue);


// console.log(birthDate);
// console.log(currDate);
// console.log(age);
