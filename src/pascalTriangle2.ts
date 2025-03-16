function getRow(rowIndex: number): number[] {
  let row: number[] = [1];

  for (let i = 1; i <= rowIndex; i++) {
    // Update from right to left to avoid overwriting
    for (let j = i; j > 0; j--) {
      row[j] = (row[j] || 0) + row[j - 1];
    }
  }

  return row;
}

// Test cases
console.log(getRow(3)); // Output: [1,3,3,1]
console.log(getRow(0)); // Output: [1]
console.log(getRow(1)); // Output: [1,1]
