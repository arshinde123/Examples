//promise is solution to the callback
//Promises are "Continuation events" and
//they help you execute the multiple async operations together in a much cleaner code style.


function getSum(n1, n2) {
    var isAnyNegative = function() {
       return n1 < 0 || n2 < 0;
    }
    var promise = new Promise(function(resolve, reject) {
       if (isAnyNegative()) {
          reject("Negatives not supported");
       }
       resolve(n1 + n2);
    });
    return promise;
 }
 function getdifference(n1,n2){
   var promise = new Promise(function(resolve,reject){
     resolve(n1 - n2);
   });
   return promise;
 }

 getSum(5, 6)
 .then(function(result) {
    console.log(result);
    return getdifference(20, 10)
  })
  .then(function(result){
    console.log(result);
  })
  .catch(function(error){
    console.log(error);
  })



/*
  - Different fashion
 getSum(5, 6)
 .then(function(result) {
    console.log(result);
    getdifference(20, 10).then(function(result){
      console.log(result);
    })
    .catch(function(error){
      console.log(error);
    })
  })
  .catch(function(error){
    console.log(error);
  })
*/



 /*
 - Different fashion

 getSum(5, 6)
 .then(function(result) {
    console.log(result);
    return getdifference(20, 10);
    //this returns another Promise
 },
 function(error) {
    console.log(error);
 })
 .then(function(result) {
    console.log(result);
    //return getSum(30, -40);
    //this returns another Promise
 },
 function(error) {
    console.log(error);
 })

 console.log("End of script ");
*/

/*
    End of script
    11
    10
*/
