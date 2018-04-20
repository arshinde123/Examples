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

(async function(){
  //console.log("sequential execution of getSum then getDifference");
  //i.e. getdifference is dependent upon getSum
  var sum = await getSum(5,6);
  var diff = await getdifference(20,10);
  console.log(sum);
  console.log(diff);
})();

(async function(){
  //console.log("parallel execution of getSum then getDifference");
  //i.e. getdifference is dependent upon getSum
  var sumPromise = getSum(5,6);
  var diffPromise = getdifference(20,10);
  var sum = await sumPromise;
  var diff = await diffPromise;
  console.log(sum);
  console.log(diff);
})();
