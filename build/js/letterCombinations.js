"use strict";
function letterCombinations(digits) {
    if (!digits)
        return [];
    const digitToLetters = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    };
    const result = [];
    function backtrack(index, current) {
        if (index === digits.length) {
            result.push(current);
            return;
        }
        const letters = digitToLetters[digits[index]];
        for (const letter of letters) {
            backtrack(index + 1, current + letter);
        }
    }
    backtrack(0, "");
    return result;
}
// Example usage
console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("")); // []
console.log(letterCombinations("2")); // ["a","b","c"]
