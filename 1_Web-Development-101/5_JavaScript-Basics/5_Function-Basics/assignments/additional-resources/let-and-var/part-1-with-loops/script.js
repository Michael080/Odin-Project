"use strict";
// [let and var  |  *Kyle Simpson*](https://davidwalsh.name/for-and-against-let)

// creating an "explicitly-scoped block"
if (1) {
	console.log('some arbitrary code...');

	// NOTE: the obviously explicit block below
	{
		let b, c;
		console.log('some more arbitrary code...');
		b = 10;
		c = 1;

		if (b > 3) {
			console.log(`b + c: ${b + c} \n\n`);
		}
	}
}
// NOTE: Kyle Simpson suggest that preferring an explicitly blocked scope (as shown above), should be a best-practice when considering usage of `let`

// example of value poisoning via `var`: **prints `6`**
for (var j = 1; j <= 5; j++) {
	setTimeout(function() {
		console.log("j:", j);
	}, j * 1000);
}
// NOTE: the reason this happens is that each time to the loop executes a new value for the iterator is created, in other words it is scoped to each iteration of the loop
// simulating this behavior using `let`:
{
	let l;
	for (l = 1; l <= 5; l++) {
		setTimeout(function() {
			console.log("l:", l);
		}, l * 1000);
	}
}

// `let` declaration creates a new scope for each iteration:
{
	let m;
	for (let m = 1; m <= 5; m++) {
		let i = m; // <- new `i` for each iteration!!!
		setTimeout(function() {
			console.log("m:", m);
			console.log(`i (scoped): ${i}`);
		}, m * 1000);
	}
}
