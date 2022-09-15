let a = prompt("Введите текст");
let b = a.split("_");
let rez = b[0];

for (let i = 1; i < b.length; i++) {
    rez += b[i][0].toUpperCase() + b[i].slice(1);
}
console.log(rez);