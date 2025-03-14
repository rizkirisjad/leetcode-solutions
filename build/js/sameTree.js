"use strict";
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function isSameTree(p, q) {
    // If both trees are null, they are the same
    if (!p && !q)
        return true;
    // If one of them is null or values are different, they are not the same
    if (!p || !q || p.val !== q.val)
        return false;
    // Recursively check left and right subtrees
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// Example usage
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(isSameTree(tree1, tree2)); // Output: true
const tree3 = new TreeNode(1, new TreeNode(2));
const tree4 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(tree3, tree4)); // Output: false
