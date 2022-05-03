let a = +prompt(`Введите число`);
let b = +prompt(`Введите число`);
let c = +prompt(`Введите число`);
let array = [a, b, c];
let result = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        result += array[i];
    }
}
console.log(result);