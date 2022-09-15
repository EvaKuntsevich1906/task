//Задача 4
// На входе массив. Необходимо создать функцию проверки на то что в 
// массиве только строки. Если результат проверки – true, то передать 
// массив в новую функцию, возвращающую строку из всех элементов массива

const arr = [`abc`, `abc`, `abc`, `abc`, `abc`, `abc`];
function сheck (element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        (isNaN(element[i])) ? true: count += 1;
    }
    return count;
}
let returnstr = (el) => {
    let truearray = сheck(el)
    if (truearray === 0) {
        let strabc = ``;
        for (let i of el) {
            strabc +=i
        }
        return strabc;
    } else {
        return `Вы ввели не строковое значене`
    }
}
console.log(returnstr(arr))