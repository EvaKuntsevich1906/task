let kar = +prompt(`Введите номер кармана`);

if (kar < 0 || kar >= 37) {
    console.log(`Ошибка ввода`);
} else if (kar === 0) {
    console.log(`Зеленый`);
} else if (kar == 1 || kar == 3 || kar == 5 || kar == 7 || kar == 9) {
    console.log(`Красный`);
} else if (kar == 2 || kar == 4 || kar == 6 || kar == 8 || kar == 10) {
    console.log(`Черный`);
} else if (kar == 11 || kar == 13 || kar == 15 || kar == 17) {
    console.log(`Черный`);
} else if (kar == 12 || kar == 14 || kar == 16 || kar == 18) {
    console.log(`Красный`);
} else if (kar == 19 || kar == 21 || kar == 23 || kar == 25 || kar == 27) {
    console.log(`Красный`);
} else if (kar == 20 || kar == 22 || kar == 24 || kar == 26 || kar == 28) {
    console.log(`Черный`);
} else if (kar == 29 || kar == 31 || kar == 33 || kar == 35) {
    console.log(`Черный`)
} else {
    console.log(`Красный`);
}