function upDown(str) {
  let isDown = true;
  let substr = str;
  let length = str.length;

  while (length > 1) {
    substr = substr.substring(0, length);
    console.log(substr);
    length--;
    // stop "shrinking" string
    if (substr.length === 1) {
      return;
    }
  }

  while (length <= str.length) {
    substr = str.substring(0, length);
    length++;
    console.log(substr);
  }
}

upDown("string");
