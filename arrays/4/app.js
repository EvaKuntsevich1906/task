//В массиве оставить только уникальные значения [0, 1,0, 0, 2, 3, 4, 5, 5, 1] -> [2, 3, 4]

const arr = [0, 1, 0, 0, 2, 3, 4, 5, 5, 1].sort();
let result = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1]) {
        continue
    } else {
        result.push(arr[i]);
    }
}
console.log(result);