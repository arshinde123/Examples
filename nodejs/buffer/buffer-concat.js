/*
  Concatenate Buffers
    syntax:
      Buffer.concat(list[, totalLength])

      parameters:
        list − Array List of Buffer objects to be concatenated.

        totalLength − This is the total length of the buffers when concatenated.

      - This method returns a Buffer instance.

*/
//Example
var buffer1 = new Buffer('Tutorials Point ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());
