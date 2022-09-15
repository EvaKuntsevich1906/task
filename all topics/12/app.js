// Дан массив [10, 20, 30, 50, 235, 3000]. Необъодимо
// проверить находятся ли внутри массива числа. Если да,
// то выведите на экран только те числа из массива, которые 
// начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235. 
// Если нет, то исключение
// каждый элемент массива сделать строкой 
// если элемент на
const array = [10, 20, 30, 50, 235, 3000];

let checkingValueByNumber = (initialArray) => {
    errors = 0;
    for (let i = 0; i < initialArray.length; i++) {
        if (isNaN(initialArray[i])) errors++;
    }
    if (errors === 0) return true;
    else throw new Error(`Вы ввели не число`)
}
let findNumberWithCondition = (elementsOfArray) => {
    let callFunctionChecks = checkingValueByNumber(elementsOfArray);
    let valuefromTheCondition = []
    if (callFunctionChecks) {
        valuefromTheCondition = elementsOfArray.filter(number => ['1', '2', '5'].includes(number.toString()[0]));
    }
    return valuefromTheCondition;
}

console.log(findNumberWithCondition(array));