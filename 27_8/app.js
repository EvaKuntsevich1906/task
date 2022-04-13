let abcd = +prompt(`Введите число`);
let a = (Math.floor(abcd / 1000));
let b = (Math.floor(abcd / 100) % 10);
let c = (Math.floor(abcd / 10)) % 10;
let d = abcd % 10;

console.log(((a % 2) > 0) ? `${a}- Число нечетное` : `${a}- Число четное`);
console.log(((b % 2) > 0) ? `${b}- Число нечетное` : `${b}- Число четное`);
console.log(((c % 2) > 0) ? `${c}- Число нечетное` : `${c}- Число четное`);
console.log(((d % 2) > 0) ? `${d}- Число нечетное` : `${d}- Число четное`);

