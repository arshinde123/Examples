/*
  class methods
    1) Buffer.isEncoding(encoding)
      - Returns true if the encoding is a valid encoding argument, false otherwise.

    2) Buffer.isBuffer(obj)
      - Tests if obj is a Buffer.

    3) Buffer.byteLength(string[, encoding])
      - Gives the actual byte length of a string.
      - encoding defaults to 'utf8'.
      - It is not the same as String.prototype.length,
      - since String.prototype.length returns the number of characters in a string.

    4) Buffer.concat(list[, totalLength])
      - Returns a buffer which is the result of concatenating all the buffers in the list together.

    5) Buffer.compare(buf1, buf2)
      - The same as buf1.compare(buf2). Useful for sorting an array of buffers.
*/
