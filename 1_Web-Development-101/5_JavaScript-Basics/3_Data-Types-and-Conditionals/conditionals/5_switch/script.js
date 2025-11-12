// Strict Equality
// switch evaluates expressions using *strict equality*
let a = '3';

switch (a) {
	// will NEVER match 3 === '3'
	case 3:
		console.log('Too small');
		break;
	default:
		console.log("I don't know such values");
}


// Fall-through: cases w/out breaks
let state = 'counting';

switch (state) {
	case 'not counting':
		console.log('I hate counting foo.');
		break;
	case 'counting':
		console.log('Begin count...');
	case 'one':
		console.log('uno')
	case 'two':
		console.log('dos')
	case 'three':
		console.log('tres!');
		break;
	case 'fout':
		console.log('quattro');
}


// Grouped case aka Fall-through switch
state = 'two';

switch (state) {
	case 'counting':
	case 'one':
	case 'two':
	case 'three':
		console.log('\n\nNew Count:');
		console.log('uno')
		console.log('dos')
		console.log('tres!');
		break;
	case 'four':
		console.log('quattro');
}

// Problems (Tasks)
// Write the code using if..else which would correspond to the following switch:
let browser = 'Edge';

switch (browser) {
	case 'Edge':
		console.log("You've got the Edge!");
		break;

	case 'Chrome':
	case 'Firefox':
	case 'Safari':
	case 'Opera':
		console.log('Okay we support these browsers too');
		break;

	default:
		console.log('We hope that this page looks ok!');
}

// rewritten w/ if:
console.log('\n\nrewritten using \'if\':');
browser = 'LibreWolf';

if (browser == 'Edge') {
	console.log('You got Edge!');
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
	console.log('Okay we support these browsers too');
} else {
	console.log('We hope that this page looks ok!');
}


// Rewrite the code below using a single switch statement:
a = 0;

if (a == 0) {
	console.log(0);
}
if (a == 1) {
	console.log(1);
}

if (a == 2 || a == 3) {
	console.log('2,3');
}

a = 3;
console.log('\n\nrewritten using switch')
switch (a) {
	case 0:
		console.log(0);
		break;
	case 1:
		console.log(1);
		break;
	case 2:
	case 3:
		console.log('2,3');
}
