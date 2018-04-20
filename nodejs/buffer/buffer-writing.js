/*
  Writing to Buffers
    syntax:
      buf.write(string[, offset][, length][, encoding])

      parameters:
        string − This is the string data to be written to buffer.

        offset − This is the index of the buffer to start writing at. Default value is 0.

        length − This is the number of bytes to write. Defaults to buffer.length.

        encoding − Encoding to use. 'utf8' is the default encoding.

      - write() method returns the number of octets written.
      - If there is not enough space in the buffer to fit the entire string, it will write a part of the string.


*/

//Example:
  buf = new Buffer(256);
  len = buf.write("Simply Easy Learning");
  console.log("Octets written : "+  len); // 20
