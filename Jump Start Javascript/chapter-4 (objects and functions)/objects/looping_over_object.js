var data, key;
data = {
  firstName: "James",
  lastName: "Kirk",
  occupation: "Captain"
};
for (key in data) {
  console.log(key + " is " + data[key]); // output  //firstName is James
                                                    //lastName is Kirk
                                                    //occupation is Captain
}


// hasOwnProperty() method make sure that the key we're using belongs to the object
//and not from further up the prototype chain.

//If it returns we can proceed with our operation.

var data, key;
data = {
  firstName: "James",
  lastName: "Kirk",
  occupation: "Captain"
};
for (key in data) {
  if (data.hasOwnProperty(key)) {
    console.log(key + " is " + data[key]);
  }
}
