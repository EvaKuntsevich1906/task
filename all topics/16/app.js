// Является ли слово палиндромом. 
// Добавить проверки (как вы считаете 
// какие проверки здесь необходимы?)

let words = prompt(``).trim().toLowerCase();

let checkPalindrom = (palindrom) => {
    try {
        if (isNaN(palindrom)){
            let res
            for (let i = 0; i < palindrom.length; i++) {
                res = (palindrom === palindrom.split('').reverse().join(``)) ? true : false;
            }
            return res
        } else throw new Error (`Вы ввели не строковое значение`)

    } catch (error) {
        return error
    }
}
console.log(checkPalindrom(words));