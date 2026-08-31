let numbers = [10, 20, 30, 40];

let firstElement = numbers[0];

for (let i = 0; i < numbers.length - 1; i++) {
    numbers[i] = numbers[i + 1];
}

numbers[numbers.length - 1] = firstElement;

console.log("Rotated array:", numbers);

