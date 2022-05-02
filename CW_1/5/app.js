let a = prompt(``);
if (isNaN(a) === false && (a % 3 === 0) === true) {
    console.log(`Это число и остаток от деления на 3 равен 0`);
} else if (isNaN(a) === false && (a % 3 === 0) === false) {
    console.log(`Это число, но остаток от деления на 3 не равен 0`);
} else {
    console.log(`Это не число`);
}