function twoSum(numbers: number[], target: number): number[] {
  const map = new Map<number, number>(); // Stores {value: index}

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i]; // Return indices
    }

    map.set(numbers[i], i); // Store the value and index
  }
  throw new Error("No solution found"); // This should never happen as per problem constraints
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
