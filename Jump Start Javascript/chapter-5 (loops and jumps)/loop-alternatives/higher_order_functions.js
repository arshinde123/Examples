//forEach, every, some, filter, map, reduce and reduceRight
//These are higher order functions because they accept functions as their arguments.

// example 1 //
var myNums = [3, 5, 10, 4, 2, 1, 16, 7];

//using loop-based approach
var sum = 0;
for (var i = 0; i < myNums.length; i++) {
  if (myNums[i] % 2 === 0) {
    sum += myNums[i];
  }
}
console.log(sum); // output: 32

//using functional approach
var sum = myNums.filter(function(x) {
  return x % 2 === 0
}).reduce(function(num1, num2) {
  return num1 + num2;
})
console.log(sum); //output:32


// example 2 //
var tasks = [
  {name: 'Buy milk', owner: 'James'},
  {name: 'Trash', owner: 'Jill'},
  {name: 'Bills', owner: 'Paul'},
  {name: 'Repairs', owner: 'Jill'},
  {name: 'Plumber', owner: 'James'}
];

//using loop-based approach
var numTasks = 0;
var newTasks = [];
for (var i = 0; i < tasks.length; i++) {
  var task = tasks[i];
  if (task.owner === 'Paul' || task.owner === 'James') {
    var newTask = {name: task.name, owner: 'David'};
    newTasks.push(newTask);
  }
}
console.log(newTasks);
//using functional approach
var newTasks = tasks.filter(function(task) {
  return task.owner === 'Paul' || task.owner === 'James'
}).map(function(t) {
  t.owner = 'David';
  return t;
});
console.log(newTasks);


/*  output
[ { name: 'Buy milk', owner: 'David' },
{ name: 'Bills', owner: 'David' },
{ name: 'Plumber', owner: 'David' } ]
*/
