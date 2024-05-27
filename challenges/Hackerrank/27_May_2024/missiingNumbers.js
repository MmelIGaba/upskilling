/*
 * Complete the 'missingNumbers' function below.
  
Given two arrays of integers, find which elements in the second array are missing from the first array.

Example


The  array is the orginal list. The numbers missing are .

Notes

If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. 
If that is not the case, then it is also a missing number.
Return the missing numbers sorted ascending.
Only include a missing number once, even if it is missing multiple times.
The difference between the maximum and minimum numbers in the original list is less than or equal to .
Function Description

Complete the missingNumbers function in the editor below. It should return a sorted array of missing numbers.

missingNumbers has the following parameter(s):

int arr[n]: the array with missing numbers
int brr[m]: the original array of numbers
Returns

int[]: an array of integers

 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr, brr) {
    // Write your code here
    //   console.log(arr, brr);
    let count = [];
    const x = Array.from(new Set(brr));
    let [obj1, obj2] = [{}, {}];
    for (let i = 0; i < arr.length; i++) {
      obj1[arr[i]] = (obj1[arr[i]] || 0) + 1;
    }
    for (let i = 0; i < brr.length; i++) {
      obj2[brr[i]] = (obj2[brr[i]] || 0) + 1;
    }
  //   console.log(obj1, obj2);
      for(let i = 0; i < x.length; i ++){
          if(obj1[x[i]] !== obj2[x[i]]){
              count.push(Number(x[i]));
          }
      }
    return count.sort((a, b)=>a-b);
  }
const arr = "203 204 205 206 207 208 203 204 205 206".split(" ");
const brr = "203 204 204 205 206 207 205 208 203 206 205 206 204".split(" ");
console.log(missingNumbers(arr, brr));
