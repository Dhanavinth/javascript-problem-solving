let numbers = [10, 15, 22, 7, 8, 13, 4, 9];

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    } else {
        oddNumbers.push(numbers[i]);
    }
}

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);

