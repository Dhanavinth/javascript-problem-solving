
let numbers = [10, 15, 22, 7, 8, 13];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even numbers:", evenCount);
console.log("Odd numbers:", oddCount);


