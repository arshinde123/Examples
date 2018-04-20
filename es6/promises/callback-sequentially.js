function notifyAll(fnSms, fnEmail) {
  setTimeout(function() {
     console.log('starting notification process');
     fnEmail(fnSms);
  }, 2000);
}
notifyAll(
  function() {
    //console.log("Sms send ..");
    setTimeout(function() { console.log("Sms send ..");},8000);
  }
  ,
  function(callbackFunc) {
    callbackFunc();
    console.log("email send ..");
    //setTimeout(function() { console.log("email send ..");},5000);
  }
);
console.log("End of script");





// function firstFunction(callback){
//   // some very time consuming asynchronous code...
//   console.log('1');
//
//   return callback(function(){
//     console.log("Second function finished.");
//     return true;
//   });
// }
// function secondFunction(callback){
//   // waits for firstFunction to be completed
//   console.log('2');
//
//   return callback();
// }
//
// console.log(firstFunction(secondFunction));
