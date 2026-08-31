let array1 = [10, 20, 30, 40, 50];
let array2 = [30, 40, 50, 60, 70];

let commonElements = [];

for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
            commonElements.push(array1[i]);
            break;
        }
    }
}

console.log("Common elements:", commonElements);

