// return statment takes following general form
// return expression;
// return;

// It can only be used within a function

function divideBy(numerator, denominator) {
  return numerator / denominator;
}

//Extra tip:  when dividing by zero in javascript doesn't cause exception.
//            A positive number divided by zero yields infinity
//            A negative number divided by zero yields infinity
//            Zero divided by zero yields NaN
//In all above cases normal execution of program can continue


// trying to write only single return statment in a function is a good practice

function mergeTasks(taskList1, taskList2) {
  var merged;
  if (taskList1 === undefined)
    // instead of //return taskList2;
    merged = taskList2;
  else if (taskList2 === undefined)
    // instead of //return taskList1;
    merged = taskList1;
  else {
    // merge code
    merged = ...;
  }
  return merged;
}

// with multiple exit points, the code can be written in a slightly cleaner way as below:

function mergeTasks(taskList1, taskList2) {
  if (taskList1 === undefined) {
    return taskList2;
  } else if (taskList2 === undefined) {
    return taskList1;
  }
  // merge code
  var merged = ...;
  return merged
}

// look how we have guard the statment to check for exception conditions,
// followed by single exit at the end

// **It is fine to follow this pattern of guard statments at the top followed single exit.
