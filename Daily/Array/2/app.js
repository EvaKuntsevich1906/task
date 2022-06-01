// Пользователь вводит число, являющееся количеством элементов массива. 
// Далее вводит сами элементы. Необходимо найти максимальное число используя цикл

const num = +prompt(``);
let arr = [];
let result;

for (let i = 0; i < num; i++) {
    arr.push(+prompt(``));
}
for (let i = 0; i < arr.length; i++) {
    if (i === 0) result = arr[i];
    if (arr[i] > result) {
        result = arr[i]
    }
}
console.log(result);