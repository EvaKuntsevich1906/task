let klok = prompt(``).trim("").toUpperCase("");

if (isNaN(klok) === true) {
    console.log(klok);
    console.log(`Длина строки : ${klok.length}`);
} else if (isNaN(klok) === false) {
    console.log(`Введите строковое значение`);
}