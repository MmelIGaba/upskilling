// Write a function that takes in an array, each element represents the height of a building with width 1. Return the area between the two
// highest buildings. Collecting rain water.
// Trapping Rain Water Problem

// Input: arr[] = {3, 0, 1, 0, 4, 0, 2}
// Output: 10
// Explanation: The expected rainwater to be trapped is shown in the above image.

// Input: arr[]   = {3, 0, 2, 0, 4}
// Output: 7
// Explanation: Structure is like below.
// We can trap “3 units” of water between 3 and 2,
// “1 unit” on top of bar 2 and “3 units” between 2 and 4.

const a = [1, 2, 1, 2]; // 1
const b = [3, 0, 1, 0, 4, 0, 2]; // 7

const rainWater = (arr) => {
  let volume = 0;
  let x;
  let y;
  for (let i = 1; i < arr.length - 1; i++) {
    x = arr[i];
    y = arr[i];
    for (let j = 0; j < i; j++) {
      //   x < arr[j]
      //     ? console.log("updated", arr[i], arr[j])
      //     : console.log("nah", arr[j]);
      x = Math.max(x, arr[j]);
    }
    for (let j = i + 1; j < arr.length; j++) {
      //   y < arr[j]
      //     ? console.log("updated", arr[i], arr[j])
      //     : console.log("nah", arr[j]);

      y = Math.max(y, arr[j]);
    }
    // console.log(x, y);
    // console.log(volume);
    volume += Math.min(x, y) - arr[i];
    // console.log(volume);
  }
  return volume;
};
const x = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(rainWater(x))
console.log(rainWater(a));
console.log(rainWater(b));
