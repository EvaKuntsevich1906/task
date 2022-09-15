//  Задача 20. На входе массив. Проверка на числа. Сумма всех эл-тов. For, for of, for each
// 1 способ for 
// const arr = [1, 2, 3, 4, 5, 6];

let check = (el) => {
    let count = 0;
    for (let i = 0; i < el.length; i++) {
        (!isNaN(el[i])) ? true: ++count;
    }
     return (count > 0) ? false: true
}
let sumOfAllElements = (el) => {
    if (check(el)) {
        let sumOfAllEl = 0
        for (let i = 0; i < el.length; i++) {
            sumOfAllEl += el[i]
        }
        return sumOfAllEl
    } else  return 'Error'

}
console.log(sumOfAllElements(arr));

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

