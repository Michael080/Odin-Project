// Note: Only novel syntax/concepts/methods noted in this script

// String comparisons `<`
// String comparisons algo:
// 1. Compare the first character of both strings.
// 2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// 3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// 4. Repeat until the end of either string.
// 5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true
// Note: lower case letters are acutally greater than uppercase due to their index in the internal encoding table

// Different types: vals converted to nums
console.log("'2' > 1: ", '2' > 1);

// Strictness
// Works ONLY w/out strict equality operator
console.log("'01' == 1 :", '01' == 1);

// "0" and false are equivalent unless using string equality
console.log("'0' == false: ", '0' == false);   // true
// using strict equality
console.log("'0' === false: ", '0' === false); // false

// non-strict non-equality
console.log("0 != false - non-strict: ", 0 != false);
// strict non-equality
console.log("0 !== false - strict: ", 0 !== false);


// Comparison of `null` and `undefined`
// These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.
console.log("null == undefined (non-strict): ", null == undefined); // => true
console.log("null === undefined (strict): ", null === undefined);   // => false

// `null` strangeness
// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
// On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.
console.log("null > 0: ", null > 0);   // => false
console.log("null == 0: ", null == 0); // => false
console.log("null >= 0: ", null >= 0); // => true

// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.


// Exercises
// What will be the result of the following expressions
console.log("1. 5 > 4: true", 5 > 4);
console.log("\"apple\" > \"pineapple\" (false): ", "apple" > "pineapple");
console.log("\"2\" > \"12\" (false): ", "2" > "12");
console.log("undefined == null (true): ", undefined == null);
console.log("undefined === null (false): ", undefined === null);
// wrong answer, should be `false`
console.log("null == \"\n0\n\" (~~true~~, false): ", null == "\n0\n");
console.log("null === +\"\n0\n\" (false): ", null === +"\n0\n");
