// Задача 13 .Напишите функцию, которая переворачивает число.

let value = 123;
function reverseVal (paramsVal) {
    value = String(paramsVal);
    let res = ``;
    for (let i = paramsVal.length-1; i>=0; i--) {
        res += paramsVal[i];
    }
    return res;
} 
console.log(reverseChislo);
