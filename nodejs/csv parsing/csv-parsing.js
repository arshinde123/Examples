//task 2
var fs = require("fs");
var buf = new Buffer(1024);
var papa = require('papaparse');
var csvString ;

var config = {
	delimiter: "",	// auto-detect
	newline: "",	// auto-detect
	quoteChar: '"',
	header: true,
	dynamicTyping: false,
	preview: 0,
	encoding: "",
	worker: false,
	comments: false,
	step: undefined,
	complete: undefined,
	error: undefined,
	download: false,
	skipEmptyLines: false,
	chunk: undefined,
	fastMode: undefined,
	beforeFirstChunk: undefined,
	withCredentials: undefined
};

console.log("Going to open employees.csv");
fs.open('employees.csv', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }

   console.log("employees.csv opened successfully");
   console.log("Going to read the employees.csv");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");

      // Print only read bytes to avoid junk.
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
         csvString = buf.slice(0, bytes).toString();
         console.log(csvString);
         var results = papa.parse(csvString,config)
         for(i=0;i<results.data.length;i++){
           console.log(results.data[i]);
         }
         // var res = papa.parse(bytes, config);
         // console.log(res.data);
      }
   });
});




//Task 3
// console.log("task 3");
//
// // var results = papa.parse("employees.csv");
// // console.log(results.meta.delimiter);
//
// var r = papa.parse("employees.csv", {
// 	complete: function(results) {
// 		console.log(results);
// 	}
// });
