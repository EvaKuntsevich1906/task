let a = prompt(`Введите какой-нибудь текст`);
let b = a.split(` `);
let result = " ";
for (let i = 0; i < b.length; i++) {
    result += b[i][0].toUpperCase() + b[i].slice(1) + " "
}
console.log(result);