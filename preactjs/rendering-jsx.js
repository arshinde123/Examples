/*
  Out of the box, Preact provides an h() function that turns your JSX into Virtual DOM elements
  - (here's how). It also provides a render() function that creates a DOM tree from that Virtual DOM.

  To render some JSX, just import those two functions and use them like so:

  import { h, render } from 'preact';
  render((
    <div id="foo">
      <span>Hello, world!</span>
      <button onClick={ e => alert("hi!") }>Click Me</button>
      </div>
  ), document.body);
*/
