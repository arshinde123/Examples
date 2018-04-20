//Example: Class Inheritance

'use strict'
class Shape {
   constructor(a) {
      this.Area = a
   }
}
class Circle extends Shape {
   disp() {
      console.log("Area of the circle:  "+this.Area) // 223
   }
}
var obj = new Circle(223);
obj.disp() // Area of the circle:  223


//Multi-level Inheritance
'use strict'
class Root {
   test() {
      console.log("hi from parent class") //hi from parent class
   }
}
class Child extends Root {}
class Leaf extends Child {}

//indirectly inherits from Root by virtue of inheritance {}
var obj1 = new Leaf();
obj1.test() //hi from parent class
//=============================================================//

//class inheritance and method overridding
'use strict' ;
class PrinterClass {
   doPrint() {
      console.log("doPrint() from Parent called… ");
   }
}
class StringPrinter extends PrinterClass {
   doPrint() {
      console.log("doPrint() is printing a string…");
   }
}
var obj = new StringPrinter();
obj.doPrint();
// output: doPrint() is printing a string…
//=============================================================================

// super keyword
'use strict'
class PrinterClass1 {
   doPrint() {
      console.log("doPrint() from Parent called…")
   }
}
class StringPrinter1 extends PrinterClass1 {
   doPrint() {
      super.doPrint()
      console.log("doPrint() is printing a string…")
   }
}
var obj2 = new StringPrinter1()
obj2.doPrint()
/*
  output:
      doPrint() from Parent called…
      doPrint() is printing a string…
*/
