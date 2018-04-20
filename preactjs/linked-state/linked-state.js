/*
  - One area Preact takes a little further than React is in optimizing state changes.
  - A common pattern in ES2015 React code is to use Arrow functions within a render() method
  - in order to update state in response to events.
  - Creating functions enclosed in a scope on every render is inefficient and
  - forces the garbage collector to do more work than is necessary.
*/

/*
  Solution - 1
    One solution is to declare bound component methods using ES7 class properties.


    class Foo extends Component {
      updateText = e => {
          this.setState({ text: e.target.value });
      };
      render({ }, { text }) {
          return <input value={text} onInput={this.updateText} />;
      }
    }

    render(<Foo/>);

    - While this achieves much better runtime performance,
    - it's still a lot of unnecessary code to wire up state to UI.

    Another solution:
      - Another solution is to bind component methods declaratively, using ES7 decorators, such as decko's @bind :
*/


/*
  Solution - 2 : by preact (Linked State to the Rescue)

    - Fortunately, there is a solution in the form of preact's linkState module.
    - Earlier versions of Preact had the linkState() function built-in;
    - however, it has since been moved to a separate module.



    - Calling linkState(this, 'text') returns a handler function that,
    - when passed an Event, uses its associated value to update the named property in your component's state.
    - Multiple calls to linkState(component, name) with the same component and name are cached,
    - so there is essentially no performance penalty.


    import linkState from 'linkstate';
    class Foo extends Component {
      render({ }, { text }) {
        return <input value={text} onInput={linkState(this, 'text')} />;
      }
    }
    render(<Foo/>);
*/
