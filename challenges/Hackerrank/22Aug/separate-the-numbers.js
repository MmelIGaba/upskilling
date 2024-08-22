function separateNumbers(s) {
  const len = s.length;

  for (let i = 1; i <= len / 2; i++) {
    let firstNumber = BigInt(s.substring(0, i));
    let nextExpected = firstNumber + 1n;
    let j = i;

    while (j < len) {
      const nextNumberStr = nextExpected.toString();
      const nextLen = nextNumberStr.length;

      if (s.substring(j, j + nextLen) !== nextNumberStr) {
        break;
      }

      j += nextLen;
      nextExpected += 1n;
    }

    if (j === len) {
      console.log("YES " + firstNumber);
      return "YES " + firstNumber;
    }
  }

  console.log("NO");
  return "NO";
}

const arr = ["1234", "91011", "99100", "101103", "010203", "13", "1"];
arr.forEach((i) => separateNumbers(i));
