/*
Louise joined a social networking site to stay in touch with her friends. 
The signup page required her to input a name and a password. However, the password must be strong. 
The website considers a password to be strong if it satisfies the following criteria:

Its length is at least .
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+
She typed a random string of length  in the password field but wasn't sure if it was strong. 
Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

url: https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true
*/
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let count = 0;
    let newStr = password;
    if (!/[0-9]/.test(password)) {
      count++;
      newStr += "1";
    }
    if (!/[a-z]/.test(password)) {
      count++;
      newStr += "a";
    }
    if (!/[A-Z]/.test(password)) {
      count++;
      newStr += "A";
    }
    if (!/[!@#$%^&*()\-+]/.test(password)) {
      count++;
      newStr += "#";
    }
    if (newStr.length < 6) {
      count += 6 - n - count;
    }
    return count;
  }
  console.log(minimumNumber(11, '#HackerRank')); // 1
  console.log(minimumNumber(3, 'Ab1'));          // 3
  console.log(minimumNumber(4, 'AUzs-nV'));      // 1
  