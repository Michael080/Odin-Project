//"use strict";

// let-block form of explicit scope
if (1) {
	var b = 5;
	var c = 0;
	// NOTE: Simpsons preferred form (not yet included in the ecma spec)
	// let( b = b + 10, c = 2) {
	// console.log('b', b);
	// };
}
// an explicit block is achieved w/out parens w/in the block but the syntax is "less explicit"
{
	let blam, slam;
	blam = 'wam';
	slam = 'clams';
}
