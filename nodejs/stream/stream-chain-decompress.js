var fs = require("fs");
var zlib = require('zlib');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input-1.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input-2.txt'));

console.log("File Decompressed.");
