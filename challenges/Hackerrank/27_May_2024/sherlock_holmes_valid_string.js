function isValid(s) {
  // Write your code here
  const charFrequency = {};
  for (let i = 0; i < s.length; i++) {
    charFrequency[s[i]] = (charFrequency[s[i]] || 0) + 1;
  }
  const arr = Object.entries(charFrequency).sort((a, b)=>b[1]-a[1]);
  arr.map((i)=>i[1] !== arr[1])
  console.log(charFrequency, '\n', arr);

  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i][1] !== arr[i+1][1]) {
      arr[i][1]--;
    }
    // if (
    //   charFrequency[s[i]] !== charFrequency[s[i + 1]]
    // ){
    //   return "No";}
  }
  if(arr.every((i)=>i[1]===arr[0][1])){
    return "Yes";
  }
  // console.log(charFrequency, '\n', arr);

  // console.log(charFrequency);
  return "No";
}
console.log(isValid("abcdefghhggfedcbea"));
