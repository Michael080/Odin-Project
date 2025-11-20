"use strict";
console.log('run me in debug mode to follow along...');
// JS Call Stack
// js keeps track of its place via a call stack
// it also uses a call stack to manage *execution contexts*:
//   - The global execution context
//   - Function execution contexts
// Call stack works based on last-in-first-out (LIFO)
// - when script is executed *global execution context* created and pushed to top
// - when function called js engine creates a *function execution context* &
//   pushes it to the top
//   - if another function is called, js engine creates a new *function execution
//     context for the func being called & pushed it to the top
//   - when current func completes, js engine pops it off the call stack and resumes
//     execution where it left off

// Call stack example
// add() last func to be added to call stack
//           - first func to be removed
function add(a, b) {
	return a + b;
}

// average() - 1st func to be added to call stack
//           - last func to be removed
function average(a, b) {
	return add(a, b) / 2;
}

let x = average(10, 20);

/*       call stack:
 * add() *called by average()*
 * average() *called by script*
 * main() *script*
*/

// Stack overflow - If the number of execution contexts exceeds the size of the stack, a stack overflow error will occur.

// Asynchronous JS - usually JS operates *single-threaded* via one call stack, 
//                   asynchronous js executes other tasks while waiting for a task
//                   to b complete via an *event loop*

