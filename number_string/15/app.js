let a = +prompt(`Введите сторону а`);
let b = +prompt(`Введите сторону b`);
let c = +prompt(`Введите сторону c`);

if (((a + b) > c) && ((b + c) > a) && ((a + c) > b)) {
    console.log(`YES`);
} else {
    console.log(`NO`);
}