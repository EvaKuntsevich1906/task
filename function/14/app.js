//Задача 14. На входе массив. Необходимо создать функцию проверки
// на то что в массиве только числа. Если результат проверки
//  – true, то передать массив в новую функцию, возвращающую 
//  сумму всех элементов массива

let arr = [1, 2, 3, 4, 5, 7, 8, 9]

let check = (arrparam) => {
    let count = 0;
    for (let i = 0; i < arrparam.length; i++) {
        !isNaN(arrparam[i]) ? true : count += 1;
    }
    return (count > 0) ? false : true;
}
let sum = (arrparam) => {
    let boolRez = check(arrparam)
    if (boolRez === true) {
        let arrsum = 0
        for (let i = 0; i < arrparam.length; i++) {
            arrsum += arrparam[i]
        }
        return arrsum
    } else return 'Error'
}
let res1 = sum(arr)
console.log(res1);
