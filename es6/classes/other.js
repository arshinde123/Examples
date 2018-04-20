//The Static Keyword

//The static keyword can be applied to functions in a class.
//Static members are referenced by the class name.

//Example

'use strict'
class StaticMem {
   static disp() {
      console.log("Static Function called") //Static Function called
   }
}
StaticMem.disp() //invoke the static method

//Note − It is not mandatory to include a constructor definition.
//Every class by default has a constructor default.

//==============================================================//

//The instanceof operator

//The instanceof operator returns true if the object belongs to the specified type.
//Example
'use strict'
class Person{ }
var obj = new Person()
var isPerson = obj instanceof Person;
console.log(" obj is an instance of Person " + isPerson); //true
