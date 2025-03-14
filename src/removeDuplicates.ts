function removeDuplicates(numbers: number[]): number {
  if (numbers.length === 0) return 0;

  let k = 1; // Start from index 1 since the first element is always unique

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i - 1]) {
      // Check if the current element is different from the previous one
      numbers[k] = numbers[i]; // Move unique element to the front
      k++; // Increase count of unique elements
    }
  }

  return k; // Return the count of unique elements
}

// Example usage:
const numbers1 = [1, 1, 2];
console.log(removeDuplicates(numbers1), numbers1); // Output: 2, [1, 2, _]

const numbers2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(numbers2), numbers2); // Output: 5, [0, 1, 2, 3, 4, _, _, _, _, _]
