let a = +prompt(`Введите число`)

console.log(`${Math.floor(a%10) + ((a%100)/10) + (a%100)}`);

