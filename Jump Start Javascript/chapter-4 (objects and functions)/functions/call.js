var tax;
tax = function(price, provincial, federal) {
  return price * provincial * federal;
};
tax.call(null, 100, 1.05, 1.095); // returns 114.975

// in call() arguments are passed as individuals unlike as array in apply()
