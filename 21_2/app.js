const a = +prompt(`Введите число`);
const b = +prompt(`Введите число`);

if (Number.isInteger(a / b)) {
    console.log(`Делится. Результат: ${a/b}`);
} else {
    console.log(`Делится с остатком. Остаток: ${a%b}`);
}