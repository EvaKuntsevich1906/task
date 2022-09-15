// Задача 13
let arr = [];
let count = 5;
let cvadrat = [];

for (let i = 0; i < count; i++) {
    arr.push(+prompt())
  }
arr.forEach ((el) => cvadrat.push(el**2)); 
console.log(cvadrat);
