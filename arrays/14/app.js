// Задача 14
let arr = [];
let count = 5;
let sum = 0;

for (let i = 0; i < count; i++) {
    arr.push(+prompt())
  }
arr.forEach ((el) => sum += el); 
console.log(sum);