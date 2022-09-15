// Задача 22. Необходимо вывести сумму всех элементов массива(конкат). Добавить проверку на строки массива.

const arr = [`str`, `str`, `str`, `str`, `str`];
let finedStringOfArray = (el) => {
    let count = 0;
    for (let i of el) {
        (isNaN(i)) ? true: ++count;
    }
    return (count > 0) ? false : true;
}
let concatOfAllElementsArray = (el) => {
    if (finedStringOfArray(el)) {
        let sumOfAllElements = ``;
        for (let i of el) {
            sumOfAllElements += i;
        }
        return sumOfAllElements;
    } else {
        return `Error`
    }
}
console.log(concatOfAllElementsArray(arr));