// Avoid using for..in loop with arrays
//do not rely on the loop returning objects in the same order in which they were defined.


var agents = {
  '005': "Michael Harp",
  '006': "John Smith",
  '007': "James Bond"
};
for (key in agents) {
    if ('007' === key) {
      console.log('Bond, ' + agents[key] + ' has been found!');
    }
    else {
      console.log('Standard spy, ' + agents[key] + ' has been found');
    }
}

//output:
/*
  Standard spy, Michael Harp has been found
  Standard spy, John Smith has been found
  Bond, James Bond has been found!
*/
