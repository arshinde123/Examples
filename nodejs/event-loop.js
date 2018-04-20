/*

- Node.js is a single-threaded application,
- but it can support concurrency via the concept of event and callbacks.
- Every API of Node.js is asynchronous and being single-threaded,
- they use async function calls to maintain concurrency.
- Node uses observer pattern.
- Node thread keeps an event loop and
- whenever a task gets completed, it fires the corresponding event
- which signals the event-listener function to execute.


Event-Driven Programming
  - Node.js uses events heavily and
  - it is also one of the reasons why Node.js is pretty fast
  - compared to other similar technologies.
  - As soon as Node starts its server,
  - it simply initiates its variables,
  - declares functions and then simply waits for the event to occur.

  - In an event-driven application,
  - there is generally a main loop that listens for events, and
  - then triggers a callback function when one of those events is detected.

  Difference between callback functions and events
  - Although events look quite similar to callbacks, the difference lies in the fact
  - that callback functions are called when an asynchronous function returns its result,
  - whereas event handling works on the observer pattern.
  - The functions that listen to events act as Observers.


  - Whenever an event gets fired, its listener function starts executing.
  - Node.js has multiple in-built events available through events module and EventEmitter class
  - which are used to bind events and event-listeners as follows −

      / Import events module
      var events = require('events');

      // Create an eventEmitter object
      var eventEmitter = new events.EventEmitter();

  - syntax to bind an event handler with an event
    // Bind event and event  handler as follows
    eventEmitter.on('eventName', eventHandler);

  - We can fire an event programmatically as follows −
    // Fire an event
    eventEmitter.emit('eventName');
*/


// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');

   // Fire the data_received event
   eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");
