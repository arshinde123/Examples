{
    function foo () {
      console.log("first call")
      return 5
     }
    if(foo() === 1)
    {
        console.log("second call")
        function foo () {
          console.log("third call")
          return 2
        }
        foo() === 2
    }
    foo() === 1
}


// (function () {
//   console.log("first call");
//
//   var foo1 = function () { console.log("second call"); return 1; }
//
//   foo1();
//   (function () {
//     console.log("third call");
//     var foo1 = function () { console.log("fourth call"); return 2; }
//     foo1();
//    })();
//    foo1();
//  })();
