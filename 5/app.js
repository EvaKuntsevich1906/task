let n = +prompt(`Введите число собачьих лет`);

if (n <= 0) {
    console.log(`Собаке еще не исполнился 1 год`);
} else if (n <= 2) {
    console.log(10.5 * n);
} else {
    console.log(21 + ((n - 2) * 4));
}