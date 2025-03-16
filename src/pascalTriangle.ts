function generatePascalTriangle(numRows: number): number[][] {
  let triangle: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    let row: number[] = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle;
}

// Example usage:
console.log(generatePascalTriangle(5));
