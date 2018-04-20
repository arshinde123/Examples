var sortByLowHigh = function(tasks) {
  return tasks.sort(function(task1, task2) {
    return task2.priority - task1.priority;
  });
};
var sortByHighLow = function(tasks) {
  return tasks.sort(function(task1, task2) {
    return task1.priority - task2.priority;
  });
};
var sortByName = function(tasks) {
  return tasks.sort(function(task1, task2) {
    return task1.text > task2.text;
  });
};
