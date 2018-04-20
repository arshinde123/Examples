var name = "Emma";
function nameHer() {
  var name; // because of this
  console.log(name); // outputs undefined
  name = "Audrey";
}

//=======================================================

var name = "Emma";
function nameHer() {
  console.log(name); // outputs undefined
  name = "Audrey";
  var name; // because of this
}

//=========================================================

var name = "Emma";
function nameHer() {
  console.log(name); // outputs undefined
  var name = "Audrey"; // because of this
}
nameHer();
