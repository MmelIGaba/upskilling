// url: https://leetcode.com/problems/binary-tree-inorder-traversal/description/
// Given the root of a binary tree, return the in-order traversal of its nodes' values.
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const inorderResult = [];
  const len = root.length;
  function inorder(len) {
    if (len === 0) return;
    inorderResult.push(root[len - len]);
    if()
    // inorder(left);
    // inorderResult.push(len.val);
    // inorder(right);
  }
  inorder(root);
  return inorderResult;
};

const root1 = [1, null, 2, 3];
const root2 = [4, 2, 5, 1, 3, null, 6, 0];
const root3 = [1, null, 2, 3, 4, null, 5];
const root4 = [];
const root5 = [1];
console.log(inorderTraversal(root1));
// console.log(inorderTraversal(root2));
