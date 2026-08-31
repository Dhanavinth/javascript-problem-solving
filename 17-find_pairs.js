let numbers = [2, 4, 3, 5, 7];
let target = 7;

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target) {
            console.log(
                "Pair:",
                "(" + numbers[i] + ", " + numbers[j] + ")"
            );
        }
    }
}

