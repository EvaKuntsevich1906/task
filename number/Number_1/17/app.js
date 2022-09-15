let n = +prompt(`Введите количество минут`)

if (n > 60) {
    console.log(`${n} мин - это ${Math.trunc (n/60)} час ${n%60} минут`);
} else if (n < 60) {
    console.log(`${n} мин - это 0 час ${n} минут`);
}