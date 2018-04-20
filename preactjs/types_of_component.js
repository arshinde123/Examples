/*
  There two types of components in Preact:

      - Classical Components, with [lifecycle methods] and state
      - Stateless Functional Components, which are functions that accept props and return [JSX].

  Within these two types, there are also a few different ways to implement components.


  Example
    - Let's use an example: a simple <Link> component that creates an HTML <a> element:
      class Link extends Component {
        render(props, state) {
          return <a href={props.href}>{ props.children }</a>;
        }
      }
    - We can instantiate/render this component as follows:
      render(<Link href="http://example.com">Some Text</Link>, document.body);

  Destructure Props & State
    - Since this is ES6 / ES2015, we can further simplify our <Link> component
    - by mapping keys from props (the first argument to render()) to local variables using destructuring:

      class Link extends Component {
        render({ href, children }) {
          return <a {...{ href, children }} />;
        }
      }

      render(<Link href="http://example.com">Some Text</Link>, document.body);
      - If we wanted to copy all of the props passed to our <Link> component onto the <a> element,
      - we can use the spread operator:
        class Link extends Component {
          render(props) {
            return <a {...props} />;
          }
        }
        render(<Link href="http://example.com">Some Text</Link>, document.body);
*/

/*
  Stateless Functional Components:
      - Lastly, we can see that this component does not hold state
      - we can render the component with the same props and get the same result each time.
      - When this is the case, it's often best to use a Stateless Functional Component.

      - These are just functions that accept props as an argument, and return JSX.

          const Link = ({ children, ...props }) => (
            <a {...props}>{ children }</a>
          );
          render(<Link href="http://example.com">Some Text</Link>, document.body);

          ES2015/ES6 Note:  the above is an Arrow Function,
                            and because we've used parens instead of braces for the function body,
                            the value within the parens is automatically returned.
                            You can read more about this https://github.com/lukehoban/es6features here.
*/
