/*
  Remove a Directory
    syntax:
      fs.rmdir(path, callback)

      parameters:
        path − This is the directory name including path.

        callback − This is the callback function No arguments
                  other than a possible exception are given to the completion callback.

*/
//Example
var fs = require("fs");

console.log("Going to delete directory /tmp/test");
fs.rmdir("/tmp/test1",function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Going to read directory /tmp");

   fs.readdir("/tmp/",function(err, files){
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file){
         console.log( file );
      });
   });
});
