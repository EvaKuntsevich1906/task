let str = prompt(``).toLowerCase().trim();
let glasn = ['a', 'e', `i`, `o`, `u`];
let iter = 0;

if (isNaN(str) === false) {
    console.log(`Введено не строковое значение`);
} else if (isNaN(str) === true) {
    for (let i = 0; i < str.length; i++) {
        if (glasn.includes(str[i])) {
            iter++
        }
    }
    console.log(`Количество гласных: ${iter}`);
}