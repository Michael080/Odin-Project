// 1. Add 2 numbers together! In your script, type in console.log(23 + 97). Running this should log 120.
console.log("1.: ",23+97);

// 2. Do the same thing but add 6 different numbers together.
console.log("2.: ",1+2+3+4+5+6);

// 3. Now log the value of the following expression: (4 + 6 + 9) / 77. The console should log approximately 0.24675.
console.log("3.: ",(4 + 6 + 9) / 77);

// 4. Let’s use some variables!
// 4-1. Add this statement to the script tag: let a = 10.
let a = 10;
// 4-2. Below it, add console.log(a). When you run this, the browser console should log 10.
console.log("4-2.: ", a);
// 4-3. Afterwards, re-assign a with a different number value. Log a again afterwards and it should show the updated value (the previous log should still show the old value of 10 since that was before a was re-assigned).
a = 20;
console.log("4-3.: ", a);
// 4-4. Now add to the bottom of the script let b = 7 * a.
let b = 7 * a;
// 4-5. Log what b is. It should log the result of 7 multiplied by whatever you re-assigned a with.
console.log("4-5.: ", b);

// 5. Try this sequence:
// 5-1. Declare a const variable max with the value 57.
const max = 57;
// 5-2. Declare another const variable actual and assign it max - 13.
const actual = max -13;
// 5-3. Declare another const variable percentage and assign it actual / max.
const percentage = actual / max;
// 5-4. Now if you log percentage, you should see a value in the console like 0.7719.
console.log("5-4.: ",percentage);
console.log("percentage: ", percentage*10,"%");
