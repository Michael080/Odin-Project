const caesar = function(str, shift) {
  // create two arrays:
  const alphabets = {
    lower : [],
    upper : [],
  }

  function makeReferenceArray() {
    const ALPHA = 26;

    const alphaLoop = (asciiA, emptyArray) => {
      for (let i = 0; i < ALPHA; i++) {
        emptyArray.push(String.fromCodePoint(i + asciiA))
      }
      return emptyArray;
    }

    alphaLoop(97, alphabets.lower);
    alphaLoop(65, alphabets.upper);
  }

  const getCode = char => char.charCodeAt(0);

  function checkCase(char) {
    const charCode = getCode(char),
    lowerCase = charCode > 96 && charCode < 123,
    upperCase = charCode > 64 && charCode < 91,
    charCase = {};

    if (lowerCase) {
      charCase.check = 'lower';
    } else if (upperCase) {
      charCase.check = 'upper'
    } else {
      charCase.check = 'special';
    }

    return charCase.check;
  }

  function shiftChar(char, shift, negativeShift) {
    // Index same regardless of case
    const index = alphabets.lower.indexOf(char.toLowerCase()),
          shifter = (shift, alphabet) => alphabet[checkCross(index, shift, negativeShift)],
          charCase = checkCase(char);    
              
    let result;

    // Assign result:
    charCase === 'lower' ? 
      result = shifter(shift, alphabets.lower) : 'next';
    charCase === 'upper' ?
      result = shifter(shift, alphabets.upper) : 'next';

    charCase !== 'lower' && charCase !== 'upper' ?
      result = char : 'next';

      if (charCase !== 'lower' && charCase !== 'upper') {
        return result = char;
      }

      let shiftIndex;
      
      function checkCross(index, shift, negativeShift) {
        let newIndex = index + shift;

        if (newIndex > 25) {
          return checkCross(0, (newIndex - 26));
        } else if (newIndex < 0) {
          return checkCross(25, newIndex + 1)
        } else {
          return newIndex;
        }
      }

    return result;
  }

  makeReferenceArray();

// Shift chars via map()
if (shift < 0) {
  const result = str.split('').map(char => shiftChar(char, shift, true)).join('');
} else {
  const result = str.split('').map(char => shiftChar(char, shift, false)).join('');
}

  const result = str.split('').map(char => shiftChar(char, shift)).join('');

  return result;
}

console.log(caesar('A', 1) === 'B');
console.log(caesar('Aaa', 1) === 'Bbb');
console.log(caesar('Hello, World!', 5) === 'Mjqqt, Btwqi!');
console.log(caesar('Mjqqt, Btwqi!', -5) === 'Hello, World!');
console.log(caesar('Hello, World!', 75) === 'Ebiil, Tloia!');

module.exports = caesar;