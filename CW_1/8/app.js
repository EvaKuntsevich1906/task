const a = +prompt(``);
const b = +prompt(``);

if (isNaN(a) === false && isNaN(b) === false) {
    console.log(`Максимальное число : ${Math.max(a,b)}`);
    console.log(`Минимальное число : ${Math.min(a,b)}`);
} else if (isNaN(a) === true || isNaN(b) === true) {
    console.log(`Ошибка ввода`);
}