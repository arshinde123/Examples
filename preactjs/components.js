/*

  - Preact exports a generic Component class,
  - which can be extended to build encapsulated, self-updating pieces of a User Interface.
  - Components support all of the standard React lifecycle methods,
  - like shouldComponentUpdate() and componentWillReceiveProps().
  - Providing specific implementations of these methods is the preferred mechanism
  - for controlling when and how components update.


  - Components also have a render() method,
  - but unlike React this method is passed (props, state) as arguments.
  - This provides an ergonomic means to destructure props and state into local variables to be referenced from JSX.


  //Example
  import { h, render, Component } from 'preact';

  class Clock extends Component {
    render() {
        let time = new Date().toLocaleTimeString();
        return <span>{ time }</span>;
    }
  }

  // render an instance of Clock into <body>:
  render(<Clock />, document.body);

*/

/*
  The Component lifecycle
    - Preact invokes the following lifecycle methods if they are defined for a Component:

    lifecycle Method                When it gets called
    ---------------------------------------------------------------------------------------------------
    1) componentWillMount           before the component gets mounted to the DOM

    2) componentDidMount            after the component gets mounted to the DOM

    3) componentWillUnmount         prior to removal from the DOM

    4) componentWillReceiveProps    before new props get accepted

    5) shouldComponentUpdate        before render(). Return false to skip render

    6) componentWillUpdate          before render()

    7) componentDidUpdate           after render()

    All of the lifecycle methods and their parameters are shown in the following example component:

      import { Component } from 'preact';
      class MyComponent extends Component {
        shouldComponentUpdate(nextProps, nextState) {}
        componentWillReceiveProps(nextProps, nextState) {
            this.props // Previous props
            this.state // Previous state
        }
        componentWillMount() {}
        componentDidMount() {}
        componentDidUpdate() {}
        componentWillUnmount() {
            this.props // Current props
            this.state // Current state
        }
      }

*/

/*
  Example:

    import { h, render, Component } from 'preact';

    class Clock extends Component {
      constructor() {
        super();
        // set initial time:
        this.state.time = Date.now();
      }

      componentDidMount() {
        // update time every second
        this.timer = setInterval(() => {
            this.setState({ time: Date.now() });
        }, 1000);
      }

      componentWillUnmount() {
        // stop when not renderable
        clearInterval(this.timer);
      }

      render(props, state) {
        let time = new Date(state.time).toLocaleTimeString();
        return <span>{ time }</span>;
      }
    }

    // render an instance of Clock into <body>:
    render(<Clock />, document.body);
*/
