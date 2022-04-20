const n = +prompt(`Введите количество людей`);


if (n % 2 > 0) {
    console.log(`${ Math.ceil (n/2)}`);
} else {
    console.log(n / 2);
}