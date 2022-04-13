let abcd = +prompt(`Введите число`);
let a = (Math.floor(abcd / 1000));
let b = (Math.floor(abcd / 100) % 10);
let c = (Math.floor(abcd / 10)) % 10;
let d = abcd % 10;

console.log(`Цифра в позиции тысяч равна ${a}`);
console.log(`Цифра в позиции сотен равна ${b}`);
console.log(`Цифра в позиции десятков равна ${c}`);
console.log(`Цифра в позиции единиц равна ${d}`);