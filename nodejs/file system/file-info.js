/*
  - Get File Information
    - syntax:
      fs.stat(path, callback)

      parameters-
        path - This is the string having file name including path.
        callback - This is the callback function which gets two arguments (err, stats)
                 - where stats is an object of fs.Stats type


    - There are several useful methods available in fs.Stats class which can be used to check file type.
        1) stats.isFile() 	Returns true if file type of a simple file.
        2) stats.isDirectory() 	Returns true if file type of a directory.
        3) stats.isBlockDevice() 	Returns true if file type of a block device.
        4) stats.isCharacterDevice() 	Returns true if file type of a character device.
        5) stats.isSymbolicLink() 	Returns true if file type of a symbolic link.
        6) stats.isFIFO() 	Returns true if file type of a FIFO.
        7) stats.isSocket() 	Returns true if file type of asocket.

*/
//Example
var fs = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");

   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());
});
