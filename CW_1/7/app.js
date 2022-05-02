let a = +prompt();
if (isNaN(a) === false && a > 0) {
    console.log(`Число больше 0`);
} else if (isNaN(a) === false && a < 0) {
    console.log(`Число меньше 0`);
} else if (isNaN(a) === false && a === 0) {
    console.log(`Число меньше 0`);
} else {
    console.log(`Это не число`);
}