function removeElement(numbers: number[], val: number): number {
  let k = 0; // Pointer for the position of elements not equal to val

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== val) {
      numbers[k] = numbers[i]; // Move valid element to the front
      k++;
    }
  }

  return k;
}

// Example usage
let numbers_1 = [3, 2, 2, 3];
let val1 = 3;
let k1 = removeElement(numbers_1, val1);
console.log(k1, numbers_1.slice(0, k1)); // Output: 2, [2,2]

let numbers_2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let k2 = removeElement(numbers_2, val2);
console.log(k2, numbers_2.slice(0, k2)); // Output: 5, [0,1,3,0,4]
