let numbers = [0, 5, 0, 3, 2];

let result = [];
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
        zeroCount++;
    } else {
        result.push(numbers[i]);
    }
}

for (let i = 0; i < zeroCount; i++) {
    result.push(0);
}

console.log("Result:", result);

