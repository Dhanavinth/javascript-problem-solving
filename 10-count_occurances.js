let numbers = [10, 20, 10, 30, 10, 40, 20];

let target = 10;
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        count++;
    }
}

console.log("Number of occurrences:", count);

