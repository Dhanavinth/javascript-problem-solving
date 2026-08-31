let numbers = [10, 25, 7, 42, 18];

let largest = numbers[0];
let secondLargest = numbers[1];

// Make sure largest starts with the bigger of the first two numbers
if (secondLargest > largest) {
    let temp = largest;
    largest = secondLargest;
    secondLargest = temp;
}

for (let i = 2; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
    } else if (numbers[i] > secondLargest) {
        secondLargest = numbers[i];
    }
}

console.log("Second largest number:", secondLargest);
