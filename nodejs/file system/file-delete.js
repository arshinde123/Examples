/*
  Delete a File
    Syntax:
      fs.unlink(path, callback)

      parameters

        path − This is the file name including path.

        callback − This is the callback function No arguments
                  other than a possible exception are given to the completion callback.

*/
//Example
var fs = require("fs");

console.log("Going to delete an existing file");
fs.unlink('delete.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});
