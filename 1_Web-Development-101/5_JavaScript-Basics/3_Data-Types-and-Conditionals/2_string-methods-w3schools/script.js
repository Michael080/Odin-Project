// Note:
// All string methods return a new string. They don't modify the original string.
// Formally said:
// Strings are immutable: Strings cannot be changed, only replaced.


// length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("length: ", text.length);


// extract string chars
// There are 4 methods for extracting string characters:
// - The at(position) Method
// - The charAt(position) Method
// - The charCodeAt(position) Method
// - Using property access [] like in arrays

// js string charCodeAt()
text = "HELLO WORLD";
// charAt()
console.log("charCode: ", text.charAt(0));

// charCodeAt() => utf-8 code
console.log("charCode: ", text.charCodeAt(0));
// fromCharCode() => convert code to character
console.log("String.fromCharCode(72): ", String.fromCharCode(72)); // => H

// codePointAt() => utf-8 code
let name = "Harry";
console.log("codePointAt(): ", name.codePointAt(2))
// convert charcode back to char:
console.log("String.fromCharCode(): ", String.fromCharCode(114));

// at() => returns character @ spec'd position
console.log("name.at(): ", name.at(1));

// property access []
console.log("name[1]: ", name[1]);

// concatenation
// str.concat()
let text1 = "thang";
let text2 = "-amalang";
let text3 = text1.concat("", text2);
console.log(text3);


// Extracting string parts
// 3 methods:
// - slice(start, end)
// - substring(start, end)
// - substr(start, length)

// slice() => extracts part of a string & returns extracted part in new string
// end not included, so position `13` is not included, string ends @ 12!
text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log("part, text.slice(7, 13): ", part);

// if second parameter is ommited, method will slice out the rest of string
part = text.slice(7);
console.log("part, text.slice(7): ", part);

part = text.slice(-12, -6);
// length
console.log("text.length(): ", text.length); // => 19
console.log("part, text.slice(-12, -6): ", part)


// String substring()
// substring() is similar to slice()
// The difference is that start and end vals less than 0 are treated as 0 in substring()
let str = "Apple, Banana, Kiwi";
part = str.substring(7, 13);
console.log(part);
part = str.substring(-4);
console.log(part);


// Convert case upper/lower
text1 = "Hello World!";
console.log("text1.toLowerCase(): ", text1.toLowerCase());
console.log("text1.toUpperCase(): ", text1.toUpperCase());


// isWellFormed() => true/false 
// a string is well formed if it doesn't contain "lone surrogates"
//
text1 = "Hello World!";
console.log("text1.isWellFormed(): ", text1.isWellFormed()); // => true
text1 = "Hello World \uD800";
console.log("text1.isWellFormed(): ", text1.isWellFormed()); // => false

// toWellFormed() = returns a new string w/ replaced "lone surrogates"
text1 = "Hello World \uD800";
console.log("text1.toWellFormed(): ", text1.toWellFormed()); // => Hello World �


// trim() => removes whitespace from both sides of string
text1 = "      Hello World!      ";
console.log("text1.trim(): ", text1.trim());

// trimStart() => removes whitespace from start of string ONLY
text1 = "      Hello World!      ";
console.log("text1.trimStart(): ", text1.trimStart(), "test 'strang");

// trimEnd() => remove whitespace from end ONLY
text1 = "      Hello World!      ";
console.log("text1.trimEnd(): ", text1.trimEnd());


// Padding
// padStart(<length>, <char>) => pads string w/ another string, multiple times, until reaching a given length
text = "5";
let padded = text.padStart(4, "0");
console.log("padded, text.padStart(4, \"0\"): ", padded);

// padEnd(<length>, <char>) => pads end of string similarly to padStart


// repeat() => method returns string w/ a number of copies of a string
text = "Hellow, whirl!";
console.log("text.repeat(2): ", text.repeat(2));


// Replacing String Content
// replace() => replace FIRST match, any other match NOT replaced
text = "Please visit Microsoft!";
console.log("text.replace(\"Microsoft\", \"W3Schools\"): ", text.replace("Microsoft", "W3Schools"))

// Regular Expressions
// Note: regexes are written w/out quotes
// `/i` => case insensitive regex flag
text = "Please visit Microsoft!";
console.log("text.replace(\"MICROSOFT/i\", \"W3Schools\"): ", text.replace("MICROSOFT/i", "W3Schools"))

// replaceAll() => allows spec'ing a regex instead of a string to be replaced
text = "Me love Cats so much.";
// `/g` => global flag required otherwise `TypeError` thrown
console.log("text.replaceAll(/Cats/g,\"Dogs\"): ", text.replaceAll(/Cats/g, "Dogs"));
// case insensitive
console.log("text.replaceAll(/Cats/g,\"Dogs\"): ", text.replaceAll(/cats/gi, "Dogs"));


// Convert String to Array
// split(), split("<char>") => if no char given splits on each char
text = "thang";
text = text.split("");
console.log(text); // => ['t','h'...]

text = "look, a thang";
text = text.split("");
console.log(text);

// split on `,`
text = "look, a thang";
text = text.split(",");
// note: the comma it split on is not included in the array
console.log("split on ',': ", text); // => ['look', ' a thang']

