let a = +prompt(`Введите  первое числовое значение`);
let b = +prompt(`Введите  второе числовое значение`);
let str = prompt(`Введите математическую операцию`);

if (isNaN(str) === false) {
    console.log(`Неверная операция`);
} else if (b === 0) {
    console.log(`На ноль делить нельзя`);
} else if (str === `+`) {
    console.log(a + b);
} else if (str === `-`) {
    console.log(a - b);
} else if (str === `*`) {
    console.log(a * b);
} else if (str === `/`) {
    console.log(a / b);
}

