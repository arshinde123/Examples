/*
  Preact.Component
    - Component is a base class that you will usually subclass to create stateful Preact components.

  Component.render(props, state)
    - The render() function is required for all components.
    - It can inspect the props and state of the component, and should return a Preact element or null.

    import { Component } from 'preact';
    class MyComponent extends Component {
      render(props, state) {
        // props === this.props
        // state === this.state

        return <h1>Hello, {props.name}!</h1>;
      }
    }
*/

/*
  Preact.render()
    render(component, containerNode, [replaceNode])

    - Render a Preact component into the containerNode DOM node. Returns a reference to the rendered DOM node.
    - If the optional replaceNode DOM node is provided and is a child of containerNode,
    - Preact will update or replace that element using its diffing algorithm.
    - Otherwise, Preact will append the rendered element to containerNode.

    import { render } from 'preact';

    // These examples show how render() behaves in a page with the following markup:
    // <div id="container">
    //   <h1>My App</h1>
    // </div>

    const container = document.getElementById('container');

    render(MyComponent, container);
    // Append MyComponent to container
    //
    // <div id="container">
    //   <h1>My App</h1>
    //   <MyComponent />
    // </div>

    const existingNode = container.querySelector('h1');

    render(MyComponent, container, existingNode);
    // Diff MyComponent against <h1>My App</h1>
    //
    // <div id="container">
    //   <MyComponent />
    // </div>
*/

/*
  Preact.h() / Preact.createElement()
    h(nodeName, attributes, [...children])

      - Returns a Preact Virtual DOM element with the given attributes.
      - All remaining arguments are collected into a children Array, and be any of the following
          - Scalar values (string, number, boolean, null, undefined, etc)
          - More Virtual DOM elements
          - Infinitely nested Arrays of the above


          import { h } from 'preact';

          h('div', { id: 'foo' }, 'Hello!');
          // <div id="foo">Hello!</div>

          h('div', { id: 'foo' }, 'Hello', null, ['Preact!']);
          // <div id="foo">Hello Preact!</div>

          h(
              'div',
              { id: 'foo' },
              h('span', null, 'Hello!')
          );
          // <div id="foo"><span>Hello!</span></div>

*/
