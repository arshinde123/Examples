/*
  - Chaining is a mechanism to connect the output of one stream to another stream and
  - create a chain of multiple stream operations.
  - It is normally used with piping operations.
  - Now we'll use piping and chaining to first compress a file and then decompress the same.
*/

var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input-1.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input-1.txt.gz'));

console.log("File Compressed.");
