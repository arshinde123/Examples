var foo, bar, baz;
function Foo() {
  this.ident = "foo";
}
foo = new Foo();
foo.ident; // returns "foo"

bar = new Foo();
bar.ident;  // returns "foo"
bar.ident = "bar";
bar.ident;  // now returns "bar"

baz = new bar.constructor();
baz.ident; // returns "foo"
