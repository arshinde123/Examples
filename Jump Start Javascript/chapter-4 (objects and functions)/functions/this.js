/*
  * this reference refers to -
    1) the global window object when used in regular function.

        function foo(){
          this; // refers to window
        }


    2) function itself while in a constructor.

      function person(){
        this.age = ""; // this refers to itself
      }


    3) the immediate parent object while in regular function inside object literal.

      var Project = {
          Managers: [

          ],
          Developers:[

          ],
          howMany: function(){
            return this.Managers.length + this.Developers.length; //this refers to Project
          }
        }



    4) the DOM element while in an event handler.

      document.getElementById("foo").onclick = function(){
        this; // refers to the DOM element
      }
*/
