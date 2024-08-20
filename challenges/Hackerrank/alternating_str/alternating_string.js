/*
 * Complete the 'alternate' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternate(s) {
  const charCounts = {};
  for (const char of s) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }

  const chars = Object.keys(charCounts);
  const str = s.split("");
  //console.log(charCounts, chars, str)
  if (chars.length < 2) {
    return 0;
  }
  let count = 0;
  function checkAlter(x) {
    let i = 0;
    while (i < x.length - 1) {
      const curr = x[i];
      const next = x[i + 1];

      if (curr === next) {
        return false;
      }
      i++;
    }
    return true;
  }

  for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      if (Math.abs(charCounts[chars[i]] - charCounts[chars[j]]) <= 2) {
        const x = str.filter((z) => z === chars[i] || z === chars[j]);
        if (checkAlter(x)) {
          count < x.length ? count = x.length: count;
           console.log(x, count);
        }
        //checkAlter(x) ? console.log(x, s, count) : count;
      }
    }
  }
  return count;
}

const a = "asvkugfiugsalddlasguifgukvsa";
console.log(alternate(a)); // 5
