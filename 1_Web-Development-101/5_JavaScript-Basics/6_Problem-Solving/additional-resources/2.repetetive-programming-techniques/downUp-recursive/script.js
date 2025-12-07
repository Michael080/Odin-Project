function down(string) {
  let substr = string;
  let length = substr.length;
  let isDown = true;
  let isEndOfDown = isDown === true && length == 1;
  let isEndOfUp = isDown === false && length == string.length;

  if (isEndOfDown) {
    return;
  } else {
    console.log(substr);
    length--;
    down(substr.substring(0, length), 'down');
  }
}

function up(string, substr) {
  let length = substr.length;
  let isUp = true;
  let isEndOfUp = string.length === length;

  if (isEndOfUp) {
    console.log(substr);
  } else {
    console.log(substr);
    length++;
    up(string, string.substring(0, length));
  }
}

function downUp(string) {
  down(string);
  up(string, string[0]);
}

downUp('string');
