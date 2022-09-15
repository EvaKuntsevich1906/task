// Задача 2.У вас есть какае-то значение. 
// Необходимо обработать это значение. Если 
// это число и оно не является четным, то 
// бросить исключение 

const anyValue = 53;
let checkisNaNOfValue = (value) => {
    try {
        if (isNaN(value)) throw new Error (`'Это строка`);
        return anyValue;
    } catch(e) {
        return e 
    }
}
const checkNumberOfValue = (value) => {
    try {
        let number =  checkisNaNOfValue(value);
        if (number % 2 == 0) return value;
        else throw new Error(`Нечетное число`)
    } catch (e) {
        return e;
    }
} 
console.log(checkNumberOfValue(value));