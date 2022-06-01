
// Преобразуйте строку 'var_test_text' в 'varTestText'.
// Скрипт, конечно же, должен работать с любыми аналогичными строками

let txt = `var_test_text`.split(``);
let result = [];
for (let i = 0; i < txt.length; i++) {
    if (txt[i - 1] === `_` && txt[i] != `_`) {
        result.push(txt[i].toUpperCase())
    } else if (txt[i] != `_`) {
        result.push(txt[i])
    } else {
        continue
    }
}
console.log(result.join(``));
