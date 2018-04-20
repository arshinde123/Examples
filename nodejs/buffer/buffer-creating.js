/*
  - Pure JavaScript is Unicode friendly, but it is not so for binary data.
  - While dealing with TCP streams or the file system, it's necessary to handle octet streams.
  - Node provides Buffer class which provides instances to store raw data similar to an array of integers
  - but corresponds to a raw memory allocation outside the V8 heap.

  - Buffer class is a global class that can be accessed in an application without importing the buffer module.
*/

/*
  Creating Buffers
    - Node Buffer can be constructed in a variety of ways.

    method-1
      - Following is the syntax to create an uninitiated Buffer of 10 octets −
        //var buf = new Buffer(10);

    method-2
      - Following is the syntax to create a Buffer from a given array −
        //var buf = new Buffer([10, 20, 30, 40, 50]);

    method-3
      - Following is the syntax to create a Buffer from a given string and optionally encoding type −
        //var buf = new Buffer("Simply Easy Learning", "utf-8");
          - Though "utf8" is the default encoding,
          - you can use any of the following encodings
              -"ascii", "utf8", "utf16le", "ucs2", "base64" or "hex".
*/
