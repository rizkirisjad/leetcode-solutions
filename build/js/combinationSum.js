"use strict";
function combinationSum(candidates, target) {
    const result = [];
    function backtrack(start, combination, currentSum) {
        if (currentSum === target) {
            result.push([...combination]);
            return;
        }
        if (currentSum > target) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]);
            backtrack(i, combination, currentSum + candidates[i]);
            combination.pop();
        }
    }
    backtrack(0, [], 0);
    return result;
}
// Example usage:
console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2,2,2,2], [2,3,3], [3,5]]
console.log(combinationSum([2], 1)); // []
console.log(combinationSum([1], 1)); // [[1]]
