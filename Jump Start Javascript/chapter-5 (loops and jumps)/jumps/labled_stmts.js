// labeled statements are used in conjuction with break and continue.
// a statement can be labeled by prefixing it with identifier.
// identifier: statement

/*
  As much as possible, avoid using labels and,
  depending on the cases, prefer calling functions or throwing an error.
*/

var i, j;
loop1:
for (i = 0; i < 3; i++) {
  //The first for statement is labeled "loop1"
  loop2:
  for (j = 0; j < 3; j++) {
    //The second for statement is labeled "loop2"
    if (i == 1 && j == 1) {
      continue loop1;
    }
    else {
      console.log("i = " + i + ", j = " + j);
    }
  }
}

/*
output:
i = 0, j = 0
i = 0, j = 1
i = 0, j = 2
i = 1, j = 0
i = 2, j = 0
i = 2, j = 1
i = 2, j = 2      
*/
