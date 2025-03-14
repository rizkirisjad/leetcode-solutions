"use strict";
// Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise. solve this problem using typescript
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Constraints:
// -231 <= x <= 231 - 1
// Follow up: Could you solve it without converting the integer to a string?
// Approach 1: Using String Conversion (Simple)
function isPalindrome(x) {
    if (x < 0)
        return false; // Negative numbers are not palindromes
    const str = x.toString();
    return str === str.split("").reverse().join("");
}
// Test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
// Approach 2: Without String Conversion (Mathematical)
function isPalindromeWithoutString(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0))
        return false; // Negative & trailing zero numbers are not palindromes
    let reversed = 0;
    let original = x;
    while (original > reversed) {
        reversed = reversed * 10 + (original % 10);
        original = Math.floor(original / 10);
        console.log(reversed, original);
    }
    // The number is a palindrome if it's the same when reversed or if ignoring the middle digit in odd-length cases
    return original === reversed || original === Math.floor(reversed / 10);
}
// Test cases
console.log(isPalindromeWithoutString(121)); // true
console.log(isPalindromeWithoutString(-121)); // false
console.log(isPalindromeWithoutString(10)); // false
console.log(isPalindromeWithoutString(1221)); // true
console.log(isPalindromeWithoutString(12321)); // true
