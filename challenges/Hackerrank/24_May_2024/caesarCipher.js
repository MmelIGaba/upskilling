/*
Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, 
just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc
Example


The alphabet is rotated by , matching the mapping above. The encrypted string is .

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Function Description

Complete the caesarCipher function in the editor below.

caesarCipher has the following parameter(s):

string s: cleartext
int k: the alphabet rotation factor
Returns

string: the encrypted string

url: https://www.hackerrank.com/challenges/caesar-cipher-1/problem?isFullScreen=true
*/

function caesarCipher(s, k) {
  // Write your code here
  let [alphabet, rotatedAlphabet, encryptedMessage] = [
    "abcdefghijklmnopqrstuvwxyz",
    "",
    "",
  ];
  lengthOfAlphabets = alphabet.length;

  if (k > lengthOfAlphabets) {
    k -= lengthOfAlphabets;
  }
  if (k > lengthOfAlphabets * 2) {
    k -= Math.floor(k / lengthOfAlphabets) * lengthOfAlphabets;
  }
  if (k > lengthOfAlphabets) {
    k -= lengthOfAlphabets;
  }

  // console.log(k, lengthOfAlphabets);
  const carryStr = alphabet.substring(0, k);
  for (let i = k; i < lengthOfAlphabets; i++) {
    rotatedAlphabet += alphabet[i];
  }
  rotatedAlphabet += carryStr;
  rotatedAlphabet = rotatedAlphabet.trim();
  for (let i = 0; i < s.length; i++) {
    if (/[a-z]|[A-Z]/.test(s[i])) {
      if (s[i] === s[i].toUpperCase()) {
        let temp = s;
        s = s.toLowerCase();
        encryptedMessage +=
          rotatedAlphabet[alphabet.indexOf(s[i])].toUpperCase();
        s = temp;
        continue;
      }
      encryptedMessage += rotatedAlphabet[alphabet.indexOf(s[i])];
    } else {
      encryptedMessage += s[i];
    }
  }
  // console.log("\n", alphabet, "\n", rotatedAlphabet);
  // console.log(k)
  return encryptedMessage;
}

// const k = 7;
// const s = "!w-bL`-yX!.G`mVKmFlX/MaCyyvSS!CSwts.!g/`He`eJk1DGZBa`eBLdyu`hZD`vV-jZDm.LCBSre..-!.!dmv!-E";
// console.log(caesarCipher(message, k));
// console.log(reverseString("anastasia"), reverseString("a nap"));
// console.log(reverseString("anastasia"), reverseString("a nap"));
// console.log('\n');
// let text = "Hello world!";
// let result = text.substring(0, k);
// console.log(result)
module.exports = { caesarCipher };
