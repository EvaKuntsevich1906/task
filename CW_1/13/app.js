const abc = +prompt();
let a = (Math.floor(abc / 100) % 10);
let b = (Math.floor(abc / 10)) % 10;
let c = abc % 10;

console.log(`Сумма цифр = ${a+b+c}`);