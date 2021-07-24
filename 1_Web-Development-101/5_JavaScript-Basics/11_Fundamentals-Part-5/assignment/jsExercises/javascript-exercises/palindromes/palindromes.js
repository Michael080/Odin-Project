const palindromes = function(str) {
  function formatStr(str) {
    let strArray;

    if (typeof str === 'string') {
      console.log('yes')
      strArray = str.toLowerCase().split('');
    } else {
      strArray = str;
    }

    console.log(strArray);
    // let strArray = str.toLowerCase().split('');
    const validStr = char => char !== ',' && char !== ' ';

    function specialChars(char) {
      char = char.charCodeAt(0);

      const specials = [
        char > 90 && char < 97,
        char > 122 || char === 32,
        char < 65
      ]

      return specials.some(special => special === true);
    };

    function deleteSpecialChars(arr) {
      strArray.forEach(char => {
        specialChars(char) ? strArray.splice(strArray.indexOf(char), 1) : 'next';
      })
      return arr;
    }

    let iterator = 0;

    while (strArray.some(char => specialChars(char))) {
      deleteSpecialChars(strArray);
      iterator++;

      if (iterator >= (strArray.length * 10)) {
        return;
      }
    }

    return strArray;    
  }

  const formattedStr = formatStr(str);
  let allMatch = true;

  formattedStr.forEach(char => {
    const reverseIndex = (formattedStr.length - 1) - formattedStr.indexOf(char);
    const reverseChar = formattedStr[reverseIndex];

    if (char !== reverseChar) {
      return allMatch = false;
    }
  })

  return allMatch;
}


console.log(palindromes('!racecar'));
console.log(palindromes('racecar!'));
console.log(palindromes('Racecar!'));
console.log(palindromes('A car, a man, a maraca.'));
console.log(palindromes('Animal loots foliated detail of stool lamina.'));
console.log(palindromes('ZZZZ car, a man, a maraca.'));
module.exports = palindromes