// Задача 5. Ряд Фибоначчи

const fib = +prompt(`Введите число`);
let arr = [0,1];

for (let i = 0; i < fib; i++) {
    if (i >= 2) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
}
console.log(arr);