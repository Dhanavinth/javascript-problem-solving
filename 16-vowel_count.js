let words = ["apple", "banana", "orange"];

let vowelCount = 0;

for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
        let character = words[i][j];

        if (
            character === "a" ||
            character === "e" ||
            character === "i" ||
            character === "o" ||
            character === "u"
        ) {
            vowelCount++;
        }
    }
}

console.log("Total vowels:", vowelCount);
