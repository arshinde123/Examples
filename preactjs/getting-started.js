/*
  Import what you need
    - The preact module provides both named and default exports,
    - so you can either import everything under a namespace of your choosing,
    - or just what you need as locals:

    Named Example
      import { h, render, Component } from 'preact';

      // Tell Babel to transform JSX into h() calls:
      /** @jsx h

    Default Example
    import preact from 'preact';

    // Tell Babel to transform JSX into preact.h() calls:
    /** @jsx preact.h


  Note: Named imports work well for highly structured applications,
        whereas the default import is quick and never needs to be updated when using different parts of the library.


  Using via a CDN
    <script src="https://cdn.jsdelivr.net/npm/preact/dist/preact.min.js"></script>
*/


/*
  Global Pragma
    - Instead of declaring the @jsx pragma in your code, it's best to configure it globally in a .babelrc.

    Named:
      For Babel 5 and prior:
            { "jsxPragma": "h" }
      For Babel 6 and 7:
            {
              "plugins": [
                ["transform-react-jsx", { "pragma":"h" }]
              ]
            }

    Default:
      For Babel 5 and prior:
            { "jsxPragma": "preact.h" }

      For Babel 6 and 7:
            {
              "plugins": [
                ["transform-react-jsx", { "pragma":"preact.h" }]
              ]
            }


*/
