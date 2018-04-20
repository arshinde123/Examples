/*
  Slice Buffer
    Syntax:
      buf.slice([start][, end])

      parameters
        start − Number, Optional, Default: 0

        end − Number, Optional, Default: buffer.length

    - Returns a new buffer which references the same memory as the old one,
    - but offset and cropped by the start (defaults to 0) and
    - end (defaults to buffer.length) indexes.
    - Negative indexes start from the end of the buffer.
*/

//Example

var buffer1 = new Buffer('Tutorials Point');

//slicing a buffer
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString()); // buffer2 content: Tutorials
