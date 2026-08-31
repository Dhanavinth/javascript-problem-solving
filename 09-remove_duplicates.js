let numbers = [10, 20, 10, 30, 20, 40, 30];

let uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    let alreadyExists = false;

    for (let j = 0; j < uniqueNumbers.length; j++) {
        if (numbers[i] === uniqueNumbers[j]) {
            alreadyExists = true;
            break;
        }
    }

    if (!alreadyExists) {
        uniqueNumbers.push(numbers[i]);
    }
}

console.log("Array without duplicates:", uniqueNumbers);
