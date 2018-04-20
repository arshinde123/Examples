// Node.js = Runtime Environment + JavaScript Library

/*  Features of nodejs
      1) Asynchronous and Event Driven
      - All APIs of Node.js library are asynchronous, that is, non-blocking.
      - It essentially means a Node.js based server never waits for an API to return data.
      - The server moves to the next API after calling it
      - and a notification mechanism of Events of Node.js
      - helps the server to get a response from the previous API call

      2) Very Fast
      - Being built on Googlev chorme's v8 JavaScript engine,
      - Node.js library is very fast in code execution.

      3) Single Threaded but Highly Scalable
      - Node.js uses a single threaded model with event looping.
      - Event mechanism helps the server to respond in a non-blocking way
      - and makes the server highly scalable as opposed to traditional servers
      - which create limited threads to handle requests.
      - Node.js uses a single threaded program
      - and the same program can provide service to a much larger number of requests
      - than traditional servers like Apache HTTP Server.
      4) No Buffering
      - Node.js applications never buffer any data.
      - These applications simply output the data in chunks.
*/

/*
  Where to Use Node.js?

  - I/O bound Applications

  - Data Streaming Applications

  - Data Intensive Real-time Applications (DIRT)

  - JSON APIs based Applications

  - Single Page Applications

*/

/*
  Where Not to Use Node.js?
  - It is not advisable to use Node.js for CPU intensive applications.
*/

/*
  A Node.js application consists of the following three important components

  1) Import required modules
    − We use the require directive to load Node.js modules.

  2) Create server
    − A server which will listen to client's requests similar to Apache HTTP Server.

  3) Read request and return response
    - The server created in an earlier step will read the HTTP request made by the client
      which can be a browser or a console and return the response.

*/

/*
  RPEL Terminal
    - REPL stands for Read Eval Print Loop and
    - it represents a computer environment like a Windows console or Unix/Linux shell
    - where a command is entered and the system responds with an output in an interactive mode.
    - Node.js or Node comes bundled with a REPL environment. It performs the following tasks −

      1) Read
        − Reads user's input, parses the input into JavaScript data-structure, and stores in memory.

      2) Eval
        − Takes and evaluates the data structure.

      3) Print
        − Prints the result.

      4) Loop
        − Loops the above command until the user presses ctrl-c twice.

*/
