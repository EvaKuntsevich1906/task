 // Задача 11
const arr = [1, 4, `Hanna`, `Dasha`, `Eva`, 5];
let str = [];
let num = [];

for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        str.push(arr[i])
    } else {
        num.push(arr[i])
    }
}
console.log(str);
console.log(num);