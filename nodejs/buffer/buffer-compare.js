/*
  Compare Buffers
    syntax:
      buf.compare(otherBuffer);

      parameters
        otherBuffer − This is the other buffer which will be compared with buf

    - Returns a number indicating whether it comes before or after or is the same as the otherBuffer in sort order.
*/
//Example
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}

// output: ABC comes before ABCD
