/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
    url: https://leetcode.com/problems/merge-sorted-array/
*/
var merge = function(nums1, m, nums2, n) {
    //return nums1.push(nums2);
    let x = 0;
    for(let i = n - 1; i < m - 1; i++){
        if(nums1[i] > nums2[x]){
            let temp = nums1[i];
            nums1[i] = nums2[x];
            nums2[x] = temp;
            x++;
            continue;
        }   
        nums1[i + 1] = nums2[x];     
        x++;
    }
    console.log(nums1);
    return nums1;
};

const a = [1,2,3,0,0,0];
const m = a.length;
const b = [2,5,6];
const n = b.length;
merge(a, m, b, n);