// Пользователь вводит число, являющееся количеством элементов массива. 
// Далее вводит сами элементы. Необходимо найти произведение всех элементов массива

const num = +prompt();
let arr = [];
let result = 1;

for (let i = 0; i < num; i++) {
    arr.push(+prompt(``))
}
for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
}
console.log(result);
