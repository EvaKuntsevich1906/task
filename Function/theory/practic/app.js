// На входе массив. Проверка на числа. Сумма всех эл-тов. For, for of, for each
// 1 способ for 
// const arr = [1, 2, 3, 4, 5, 6];

// let check = (el) => {
//     let count = 0;
//     for (let i = 0; i < el.length; i++) {
//         (!isNaN(el[i])) ? true: ++count;
//     }
//      return (count > 0) ? false: true
// }
// let sumOfAllElements = (el) => {
//     if (check(el)) {
//         let sumOfAllEl = 0
//         for (let i = 0; i < el.length; i++) {
//             sumOfAllEl += el[i]
//         }
//         return sumOfAllEl
//     } else  return 'Error'

// }
// console.log(sumOfAllElements(arr));

// 2 cпособ
// const arr = [1, 2, 3, 4, 5, 6];

// let check = (el) => {
//     let count = 0;
//     for (let  i of el) {
//         (!isNaN(i)) ? true: ++count;
//     }
//      return (count > 0) ? false: true
// }
// let sumOfAllElements = (el) => {
//     if (check(el)) {
//         let sumOfAllEl = 0
//         for (let i of el) {
//             sumOfAllEl += i
//         }
//         return sumOfAllEl
//     } else  return 'Error'

// }
// console.log(sumOfAllElements(arr));


//3 способ 

// const arr = [1, 2, 3, 4, 5, 6];

// let check = (el) => {
//     let count = 0;
//     el.forEach (el => (!isNaN(el)) ? true: ++count)
//      return (count > 0) ? false: true
// }
// let sumOfAllElements = (el) => {
//     if (check(el)) {
//         let sumOfAllEl = 0
//         el.forEach ( el => (sumOfAllEl += el))
//         return sumOfAllEl
//     } else  return 'Error'
// }
// console.log(sumOfAllElements(arr));


// Задача 2 . Найти максимальный элемент массива 

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let checkValNumberOfArray = (el) => {
//     let count = 0;
//     for (let i of el) {
//         (!isNaN(i)) ? true: ++count;
//     }
//     return (count > 0) ? false : true
// } 
// let findMaxValueOfArray = (el) => {
//     if (checkValNumberOfArray(el) === true) {
//         let max = el[0]
//         for (let i of el) {
//             (max > i) ? true: max = i;
//         } 
//         return max
//     } else return `Error`
// }
// console.log(findMaxValueOfArray(arr));

// Задача 3. Необходимо вывести сумму всех элементов массива(конкат). Добавить проверку на строки массива.

// const arr = [`str`, `str`, `str`, `str`, `str`];
// let finedStringOfArray = (el) => {
//     let count = 0;
//     for (let i of el) {
//         (isNaN(i)) ? true: ++count;
//     }
//     return (count > 0) ? false : true;
// }
// let concatOfAllElementsArray = (el) => {
//     if (finedStringOfArray(el)) {
//         let sumOfAllElements = ``;
//         for (let i of el) {
//             sumOfAllElements += i;
//         }
//         return sumOfAllElements;
//     } else {
//         return `Error`
//     }
// }
// console.log(concatOfAllElementsArray(arr));

// Задача 4. Есть массив из объектов. В каждом объекте есть ключ age. 
// Необходимо сфоромировать новый объект с ключом avg, который хранит среднее 
// число из всех объектом массива под ключом age

// let arrOfObj = [
//     {
//         age: 18
//     },
//     {
//         age: 3
//     },
//     {
//         age: 33
//     },
// ]
// let checkStringValueOfArray = (el) => {
//     let count = 0;
//     for (let i of el) {
//         (!isNaN(i.age)) ? true : ++count;
//     } 
//     return  (count>0) ? false : true
// }
// let sredneeArifmeticheckoe = (el) => {
//     if (checkStringValueOfArray(el)) {
//         let srednee = 0
//         for ( let i of el) {
//             srednee += i.age 
//         }
//         return srednee/el.length
//     } else return `Error`
// }
// console.log(sredneeArifmeticheckoe(arrOfObj));


//Задача 7.
// На входе массив. Необходимо пройтись по массиву, если число > 10 < 100, 
// то занести в новый массив.
// const array = [1, 24, 50, 34, 98, 4, 8, 69];

// let finedElementInRange = (el) => {
//     let value = el.filter(element => element > 10 && element < 100)
//     return value
// }
// console.log(finedElementInRange(array));