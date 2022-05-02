let a = +prompt(`Введите год`);

if (a % 4 == 0 && a % 100 != 0) {
    console.log(`YES`);
} else {
    console.log(`NO`);
}