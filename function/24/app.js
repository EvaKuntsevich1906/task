//Задача 24.
// На входе массив. Необходимо пройтись по массиву, если число > 10 < 100, 
// то занести в новый массив.

const array = [1, 24, 50, 34, 98, 4, 8, 69];

let finedElementInRange = (el) => {
    let value = el.filter(element => element > 10 && element < 100)
    return value
}
console.log(finedElementInRange(array));