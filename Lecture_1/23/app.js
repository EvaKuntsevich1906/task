let a = prompt(`Введите слово`).trim().toUpperCase();
let b = a.split("").reverse().join("");

console.log(a === b);