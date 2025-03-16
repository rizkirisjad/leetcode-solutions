"use strict";
function lengthOfLastWord(s) {
    // Trim any trailing spaces
    s = s.trim();
    // Split the string by spaces
    const words = s.split(" ");
    // Get the last word and return its length
    return words[words.length - 1].length;
}
// Example test cases
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6
