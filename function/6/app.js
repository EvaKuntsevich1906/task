// Задача 6 
// На входе массив. Необходимо создать функцию проверки на то что 
// в массиве только числа. Если результат проверки – true, то передать
//  массив в новую функцию, возвращающую массив из только четных чисел. 

const arr = [1, 2, 3, 4, 5, 6];

let checknum = (el) => {
    let arrnum = []
    for (let i of el) {
        if (!isNaN(i)) {
            arrnum.push(i)
        }
    }
    return (el.length == arrnum.length) ? true : false
}
let finedValues = (array) => {
    let boolCheck = checknum(array)
    if (boolCheck === true) {
        let arrfil = array.filter(el => el % 2 === 0)
        return arrfil
    } else return 'ERROR'
}
console.log(finedValues(arr));