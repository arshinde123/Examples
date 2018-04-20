// note break is only used to exit from the loop
// don't use break to exit from conditionals like if

var tasks = [
  {name: 'Buy milk', complete: false},
  {name: 'Trash', complete: false},
  {name: 'Pay bills', complete: true},
  {name: 'Repairs', complete: false},
  {name: 'Plumber', complete: true}
];
var firstComplete;
for (var i = 0; i < tasks.length; i++) {
  if (tasks[i].complete) {
    firstComplete = tasks[i];
    break;
  }
}
console.log(firstComplete);



//same above example using for loop
for (var i = 0; i < tasks.length && firstComplete === undefined; i++) {
  if (tasks[i].complete) {
      firstComplete = tasks[i];
  }
}
console.log(firstComplete);

// when using break, it is almost always possible to replace it using conditinal statements
