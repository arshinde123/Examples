// continue statment is also used in loops
// however, instead of breaking from the loop, it skips to the next iteration

var tasks = [
  {name: 'Buy milk', complete: false},
  {name: 'Trash', complete: false},
  {name: 'Pay bills', complete: true},
  {name: 'Repairs', complete: false},
  {name: 'Plumber', complete: true}
];
for (var i = 0; i < tasks.length; i++) {
  if (!tasks[i].complete) {
    continue;
  }
  console.log(i, tasks[i].name);
}

//output:
2 'Pay bills'
4 'Plumber'
