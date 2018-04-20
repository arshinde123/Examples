// Every async function you write will return a promise,
// and every single thing you await will ordinarily be a promise.

/*
  What is promise?
    - A promise is a special kind of javascript object which contains another object.
    - I could have a promise for the integer 17, or the string “hello world”,
    - or some arbitrary object, or anything else you could normally store in a javascript variable.

  How do I access the data in a promise?
    - I use `.then()`:

  How do I catch the errors from a promise chain?
    - I use `.catch()`

  Example
    function getFirstUser() {
      return getUsers().then(function(users) {
        return users[0].name;
      }).catch(function(err) {
        return {
          name: 'default user'
        };
      });
    }

  Explaination
    - Even though promises will usually be for ‘future’ data,
    - once I actually have a promise for something,
    - I really don’t need to care whether the data will be there in future,
    - or it’s already been retrieved. I just call `then()` in either case.

    - As such, promises force consistent asynchronicity.
    - It’s like saying, ‘this is going to be an async function,
    - whether or not the return value is available now or later’.
*/
