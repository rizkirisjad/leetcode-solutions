function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(path: number[], options: number[]) {
    if (options.length === 0) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < options.length; i++) {
      path.push(options[i]);
      backtrack(path, options.slice(0, i).concat(options.slice(i + 1)));
      path.pop();
    }
  }

  backtrack([], nums);
  return result;
}

// Contoh penggunaan:
console.log(permute([1, 2, 3]));
// Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
