// Задача 26.
//На входе массив. Необходимо создать функцию проверки на то
//  что в массиве только числа. Если результат проверки – true, 
//  то передать массив в новую функцию, возвращающую произведение всех
//   элементов массива.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

let check = (element) => {
    let count = 0;
    for (let i = 0; i < element.length; i++) {
        (!isNaN(element[i])) ? true: count += 1;
    }
    return count;
}
let umnoschenie = (el) => {
    let boolArr = check(el)
    if (boolArr > 0) {
        let proisv = 0;
        for (let i of el) {
            proisv *= i
        }
        return proisv;
    } else {
        return `Error`
    }
} 
console.log(umnoschenie(arr));