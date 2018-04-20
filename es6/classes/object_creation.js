class Polygon {
   constructor(height, width) {
      this.h = height;
      this.w = width;
   }
   test() {
      console.log("The height of the polygon: ", this.h) // 10
      console.log("The width of the polygon: ",this. w) // 12
   }
}

var obj = new Polygon(10,12);
obj.test();
