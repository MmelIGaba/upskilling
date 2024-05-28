function isValid(s) {
  // Write your code here
  const charFrequency = {};
  for (let i = 0; i < s.length; i++) {
    charFrequency[s[i]] = (charFrequency[s[i]] || 0) + 1;
  }
  console.log(charFrequency);
  for (let i = 0; i < s.length; i++) {
    if (charFrequency[s[i]] !== charFrequency[s[i + 1]]) {
      charFrequency[s[i]]--;
    }
    if (
      charFrequency[s[i]] !== charFrequency[s[i + 1]]
    ){
      return "No";}
  }
  console.log(charFrequency);
  return "Yes";
}
console.log(isValid("abcdefghhgfedecba"));
