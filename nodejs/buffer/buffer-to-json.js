/*
  Convert Buffer to JSON
    syntax:
      buf.toJSON()

      -This method returns a JSON-representation of the Buffer instance.
*/

// Example
  var buf = new Buffer('Simply Easy Learning');
  var json = buf.toJSON(buf);

  console.log(json);

  // When the above program is executed, it produces the following result −
  // [ 83, 105, 109, 112, 108, 121, 32, 69, 97, 115, 121, 32, 76, 101, 97, 114, 110, 105, 110,103 ]
