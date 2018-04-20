/*

  * javascript is a class-less prototypal programming language
  * where objects inherit from other objects instead of classes.

  *javascript uses functions as a classes but has no class statement.
  *Any function can act as a class and new instances of that class
  *can be created using the new keyword.

*/

var checking, savings;

// This is the definition of our Account class
function Account(accountNumber) {

  // This is the property we'll be storing the
  //   account number in.
  this.accountNumber = accountNumber;

  // This is the property we'll be tracking the
  //   account's funds in.
  this.funds = 0;

  // This is the setter method we'll be using to
  //   add funds to the account.
  this.deposit = function(amount) {
    if (amount === Number(amount)) {
      this.funds += amount;
    }
  };

  // This is the getter method that returns the
  //   account's balance.
  this.balance = function() {
    return this.funds;
  };
}

// The "new Account()" constructor returns a new account
//   object complete with deposit and balance methods. We
//   store the account object in a variable called checking.
checking = new Account("87654321");

// Using the deposit method allows us to pass values to
//   our account object.
checking.deposit(12.35);
checking.deposit(2.76);
checking.deposit(74.01);

// We now create a new account object and store that in a
//   variable called savings. It also has deposit and
//   balance methods, and is distinct from the "checking"
//   account object.
savings = new Account("12345678");
savings.deposit(225.57);

// Using the objects' balance method, we can ask each
//   of them to report their balances.
console.log(checking.balance()); // returns 89.12
console.log(savings.balance()); // returns 225.57
