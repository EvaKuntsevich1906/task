let a = +prompt();
let b = +prompt();
let c = +prompt();

if ((a > 0) && (b > 0) && (c > 0) && (a + c > b)) {
    console.log(`YES`);
} else if ((a > 0) && (b > 0) && (c > 0) && (b + c > a)) {
    console.log(`YES`);
} else if ((a > 0) && (b > 0) && (c > 0) && (a + b > c)) {
    console.log(`YES`);
} else {
    console.log(`NO`);
}