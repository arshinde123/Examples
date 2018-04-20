//sometimes, its not possible to predefine the agruments
//javascript functions have special array-like object called "arguments"
// which we can access within the function


function concatenate() {
  var i, str;
  str = "";
  for (i = 0; i < arguments.length; i += 1) {
    str += arguments[i];
  }
  return str;
}
concatenate("Super", "cali", "fragilistic", "expiali","docious");
// returns Supercalifragilisticexpialidocious
