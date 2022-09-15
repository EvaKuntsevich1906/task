//  Задача 1. У вас есть какае-то значение. 
// Необходимо обработать это значение.
//  Если это число, то бросить исключение

const value = `hello,word`;
let checkValue = (str) => {
    try {
        if (isNaN(str)) return str;
        else throw new Error(`'Это числовое значение`)
    } catch (error) {
        return Error
    }
}
console.log(checkValue(value));