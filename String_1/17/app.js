let str = prompt(`Введите текст`);
let lower = str.length - str.replace(/[a-z]/g, '').length;

console.log(lower);