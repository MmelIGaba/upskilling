/*
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER. The number of deletions necessary for making the anagram.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function makingAnagrams(s1, s2) {
  // Write your code here
  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < s1.length; i++) {
    obj1[s1[i]] = (obj1[s1[i]] || 0) + 1;
  }
  for (let i = 0; i < s2.length; i++) {
    obj2[s2[i]] = (obj2[s2[i]] || 0) + 1;
  }
  console.log(obj1, obj2);
  for (let i = 0; i < obj1.length; i++) {
    console.log('log')
    console.log(obj1[i]);
  }
  for (let i = 0; i < 3; i++) {
    console.log(obj1[s1[i]]);
    if(obj1[s1[i]] === ){
    }    
  }

  return obj1["a"] === obj2["a"] ? "Yes" : obj1["a"] - obj2["a"];
}
console.log(makingAnagrams("abcdefssacxa", "eeraszxa"));
