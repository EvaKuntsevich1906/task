// Является ли слова анаграммами. 
// Добавить проверки (как вы считаете какие проверки здесь необходимы?

let wordsA = prompt().trim().toLowerCase();
let wordsB = prompt().trim().toLowerCase();

let checkAnogramm = (element1, element2) => {
    try {
        if (isNaN(element1) && isNaN(element2)) {
            let res
            for (let i = 0; i < element1.length; i++) {
                res = (element1.split('').sort().join('') === element2.split('').sort().join('')) ? true : false;
            }
            return res;
        } else throw new Error(`Вы ввели не строковое значение`)
    } catch (error) {
        return error
    }
}
console.log(checkAnogramm(wordsA, wordsB));