function notifyAll(fnSms, fnEmail) {
  setTimeout(function() {
     console.log('starting notification process');
     fnEmail();
     fnSms();
  }, 2000);
}
notifyAll(
  function() {
    console.log("Sms send ..");
    //setTimeout(function() { console.log("Sms send ..");},8000);
  }
  ,
  function() {
    console.log("email send ..");
    //setTimeout(function() { console.log("email send ..");},5000);
  }
);
console.log("End of script");
