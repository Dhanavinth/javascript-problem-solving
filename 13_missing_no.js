let numbers = [1, 2, 3, 5];

let n = 5;

// Calculate expected sum from 1 to n
let expectedSum = 0;

for (let i = 1; i <= n; i++) {
    expectedSum = expectedSum + i;
}

// Calculate actual sum of array
let actualSum = 0;

for (let i = 0; i < numbers.length; i++) {
    actualSum = actualSum + numbers[i];
}

let missingNumber = expectedSum - actualSum;

console.log("Missing number:", missingNumber);
