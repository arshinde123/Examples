//Data Members of class = Constructor + Functions
//Classes can be included in the code either by declaring them or by using class expressions.
//Note − Unlike variables and functions, classes cannot be hoisted.

//Syntax: Declaring a Class
class Class_name {
}

//Syntax: Class Expressions
var var_name = new Class_name {
}

//Example: Declaring a class
class Polygon {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }
}

//Example: Class Expression
var Polygon = class {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }
}
//The above code snippet represents an unnamed class expression.
//A named class expression can be written as.
var Polygon = class Polygon {
   constructor(height, width) {
      this.height = height;
      this.width = width;
   }
}
