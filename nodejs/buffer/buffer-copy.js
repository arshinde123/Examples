/*
  Copy Buffer
    syntax:
      buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

      parameters:
        targetBuffer − Buffer object where buffer will be copied.

        targetStart − Number, Optional, Default: 0

        sourceStart − Number, Optional, Default: 0

        sourceEnd − Number, Optional, Default: buffer.length

    - No return value.

    - Copies data from a region of this buffer to a region in the target buffer
    - even if the target memory region overlaps with the source.
*/

//Example

var buffer1 = new Buffer('ABC');

//copy a buffer
var buffer2 = new Buffer(3);

buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString()); // buffer2 content: ABC
