function tryDemo() {
  try {
    console.log(result);
  }
  catch (e) {
    console.log(e.message);
  }
  finally {
    console.log('This will always execute');
  }
}
tryDemo();
/*
  result is not defined
  This will always execute
*/
