// function isValid(s) {
//   // Write your code here
//   const charFrequency = {};
//   for (let i = 0; i < s.length; i++) {
//     charFrequency[s[i]] = (charFrequency[s[i]] || 0) + 1;
//   }
//   const arr = Object.entries(charFrequency).sort((a, b) => b[1] - a[1]);
//   // const arr1 = arr.sort((a, b) => a[1] - b[1]);
//   // console.log(charFrequency, "\n", arr, arr1);
//   if (arr[arr.length - 1][1] < arr[arr.length - 2][1]) {
//     arr[arr.length - 1][1]++;
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i][1] !== arr[i + 1][1]) {
//       arr[i][1]--;
//       break;
//     }
//     // if (arr1[i][1] !== arr1[i + 1][1]) {
//     //   arr1[i][1]++;
//     // }
//   }
//   if (
//     arr.every((i) => i[1] === arr[0][1])
//     // ||
//     // arr.every((i) => i[1] === arr1[0][1])
//   ) {
//     return "Yes";
//   }
//   // console.log(charFrequency, '\n', arr);

//   // console.log(arr1);
//   return "No";
// }
function isValid(s) {
  // Write your code here
  const charFrequency = {};
  for (let i = 0; i < s.length; i++) {
    charFrequency[s[i]] = (charFrequency[s[i]] || 0) + 1;
  }
  const arr = Object.values(charFrequency).sort((a, b) => a - b);
  if (arr[0] < arr[arr.length - 1]) {
    arr[0] = arr[0] + 1;
    if (arr.every((i) => i === arr[arr.length - 1])) {
      return "YES";
    }
  }console.log(charFrequency, arr)
  if (arr[0] > arr[arr.length - 1]) {
    arr[arr.length - 1] = arr[arr.length - 1] - 1;
    if (arr.every((i) => i === arr[0])) {
      return "YES";
    }
  }
  //   console.log(charFrequency);
  console.log(arr);
  return "NO";
}
console.log(isValid("aabbc"));
console.log(isValid("abcdefghhgfedcbea"));
