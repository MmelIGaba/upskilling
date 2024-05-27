



const { caesarCipher } = require("../24_May_2024/caesarCipher");

function reverseString(str) {
  function appendFromLastIndex(index) {
    if (index < 1) {
      return str[0];
    }
    return str[index] + appendFromLastIndex(index - 1);
  }
  return appendFromLastIndex(str.length - 1);
}
const reversedMsg = reverseString(message)
const shifts = 25;
console.log(caesarCipher(reversedMsg, shifts));
// const x = "sorry this is late.";
// console.log(reverseString("gniKsItsirhC"), x);
