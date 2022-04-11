let FirstNumber = +prompt(`Введите число`);

if (FirstNumber === 0) {
    console.log(`Обратного числа не существует`);
} else {
    console.log((1 / FirstNumber));
}