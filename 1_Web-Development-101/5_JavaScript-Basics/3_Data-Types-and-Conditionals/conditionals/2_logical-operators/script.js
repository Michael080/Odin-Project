// Note: only novel concepts/syntax/methods noted

// Double NOT `!!`
// sometimes used for converting a value to boolean type
let nonEmpty = "non-empty string";
nonEmpty = nonEmpty;
console.log(!!nonEmpty); // true

// Exercises
// What is the code below going to output?

// 1. alert( null || 2 || undefined );
console.log("null || 2 || undefined (2): ", null || 2 || undefined);

// What will the code below output?
// 2. alert( alert(1) || 2 || alert(3) );
console.log("console.log(1) || 2 || console.log(3) (logs: `2`): ", console.log(1) || 2 || console.log(3));

// What is this code going to show?
// 3. alert( 1 && null && 2 );
console.log("1 && null && 2 (`null`):", 1 && null && 2);

// What will this code show?
// console.log( console.log(1) && console.log(2) );
// console.log() returnds `undefined` so ONLY left-side evaluated
console.log("console.log(1) && console.log(2) (logs: `1`): ", console.log(1) && console.log(2));

// What will the result be?
// console.log( null || 2 && 3 || 4 );
console.log("null || 2 && 3 || 4 (`3`): ", null || 2 && 3 || 4);

// Check the range between
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
let age = 14;

if ((age >= 14) && (age <= 90)) {
	console.log("Between 14 & 90");
} else {
	console.log("Not between 14 & 90");
}

// Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
age = 13;

if (age < 14 || age > 90) {
	console.log("Age NOT between 14 & 90");
} else {
	console.log("Is between 14 & 90");
}

// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
if (-1 || 0) console.log('first'); // answ: 'first'
if (-1 && 0) console.log('second'); // answ: escapes if methinks
if (null || -1 && 1) console.log('third'); // answ: 'third'

// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

function login(userLogin) {
	const username = userLogin;
	const cancelled = username === undefined || username === "Esc" || username === "" || username === null;
	if (cancelled) {
		console.log("Cancelled");
	} else if (username === "Admin") { // Admin login
		console.log("Welcome!");
		// prompt for pass
		auth("TheMaster");
	} else {
		console.log("I don't know you");
	}

	function auth(password) {
		const pass = password;
		const isAdmin = pass === "TheMaster";
		const isCancelled = pass === "" || pass === undefined;

		if (isAdmin) {
			console.log("Welcome Master!");
		} else if (isCancelled) {
			console.log("Cancelled");
		} else {
			console.log("Wrong Password");
		}
	}
}

login("Admin");
