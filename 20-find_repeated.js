let numbers = [5, 3, 4, 3, 2];

let seen = [];
let firstRepeated = null;

for (let i = 0; i < numbers.length; i++) {
    let alreadySeen = false;

    for (let j = 0; j < seen.length; j++) {
        if (numbers[i] === seen[j]) {
            alreadySeen = true;
            break;
        }
    }

    if (alreadySeen) {
        firstRepeated = numbers[i];
        break;
    }

    seen.push(numbers[i]);
}

console.log("First repeated element:", firstRepeated);

