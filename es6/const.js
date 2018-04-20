// The const declaration creates a read-only reference to a value.
// It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.
// Constants are block-scoped, much like variables defined using the let statement.
// The value of a constant cannot change through re-assignment, and it can't be re-declared.

const x = 10
x = 12 // will result in an error!!

//Support for constants also known as "immutable variables"
