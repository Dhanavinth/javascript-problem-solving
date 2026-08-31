let numbers = [10, 20, 30, 40, 50];

let isSorted = true;

for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) {
        isSorted = false;
        break;
    }
}

console.log("Is the array sorted?", isSorted);
