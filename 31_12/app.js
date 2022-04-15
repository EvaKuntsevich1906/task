const a = +prompt(`Введите число`);
const b = +prompt(`Введите число`);
const c = +prompt(`Введите число`);
const d = Math.sqrt((b ** 2) - 4 * a * c);

if (d > 0) {
    console.log(`x1=${(-b + d)/(2*a)}`);
    console.log(`x2=${(-b - d)/(2*a)}`);
} else if (d < 0) alert(`Нет корней`);
else console.log(x = -b / (2 * a));
