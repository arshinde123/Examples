function fullName() {
  var firstName = "Hugo";
  function alertFullName() {
    var lastName = "Reyes";
    console.log("Full name: " + firstName + " " + lastName);
    // firstName is accessible inside alertFullName()
    // because parent functions variables accessible in child functions
  }
  console.log("lastName: "+lastName); // lastName is not accessible outside alertFullName()
  alertFullName();
}
console.log("firstName: "+firstName); // firstName not accessible outside fullName()
fullName();
