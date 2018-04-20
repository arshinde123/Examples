var Project = {
  Strings: {
    Warnings: {
      overQuota: "You've exceeded your quota!",
      outOfStock: "We're out of stock!"
    }
  }
};

Project.Strings.Warnings.sessionExpired = "Your session has expired.";

console.log(Project.Strings.Warnings.outOfStock); // output: We're out of stock!

console.log(Project);
//with the following code we have destroyed our existing Strings objects
// var Project = {
//   Widgets: {}
// };
// solution to this is below code
//var Project = Project || {};
Project.Widgets = {};
console.log(Project);
/*
	output:

	{ Strings:
 		{ Warnings:
			{ overQuota: 'You\'ve exceeded your quota!',
				outOfStock: 'We\'re out of stock!',
				sessionExpired: 'Your session has expired.' } },
		Widgets: {}
	}

*/
