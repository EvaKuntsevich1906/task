// let  ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   }
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
//   );

//   Задача1 1. Пользователь вводит имя фамилию.
//    Необходимо создать функцию возвращающую строку
//     вида ,,привет, {имя} {фамилия}
// let hello  = (name, surname) => {
//     return  `Hello, ${name}, ${surname}`
// }
//  let privet = hello(`Hanna`, `Pluscka`);

//Задача 2 
// . На входе массив. Необходимо создать функцию проверки
// на то что в массиве только числа. Если результат проверки
//  – true, то передать массив в новую функцию, возвращающую 
//  сумму всех элементов массива

// let arr = [1, 2, 3, 4, 5, 7, 8, 9]

// let check = (arrparam) => {
//     let count = 0;
//     for (let i = 0; i < arrparam.length; i++) {
//         !isNaN(arrparam[i]) ? true : count += 1;
//     }
//     return (count > 0) ? false : true;
// }
// let sum = (arrparam) => {
//     let boolRez = check(arrparam)
//     if (boolRez === true) {
//         let arrsum = 0
//         for (let i = 0; i < arrparam.length; i++) {
//             arrsum += arrparam[i]
//         }
//         return arrsum
//     } else return 'Error'
// }
// let res1 = sum(arr)
// console.log(res1);


//Задача 3 
//На входе массив. Необходимо создать функцию проверки на то
//  что в массиве только числа. Если результат проверки – true, 
//  то передать массив в новую функцию, возвращающую произведение всех
//   элементов массива.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let check = (element) => {
//     let count = 0;
//     for (let i = 0; i < element.length; i++) {
//         (!isNaN(element[i])) ? true: count += 1;
//     }
//     return count;
// }
// let umnoschenie = (el) => {
//     let boolArr = check(el)
//     if (boolArr > 0) {
//         let proisv = 0;
//         for (let i of el) {
//             proisv *= i
//         }
//         return proisv;
//     } else {
//         return `Error`
//     }
// } 
// console.log(umnoschenie(arr));


//Задача 4
// На входе массив. Необходимо создать функцию проверки на то что в 
// массиве только строки. Если результат проверки – true, то передать 
// массив в новую функцию, возвращающую строку из всех элементов массива

// const arr = [`abc`, `abc`, `abc`, `abc`, `abc`, `abc`];
// function сheck (element) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         (isNaN(element[i])) ? true: count += 1;
//     }
//     return count;
// }
// let returnstr = (el) => {
//     let truearray = сheck(el)
//     if (truearray === 0) {
//         let strabc = ``;
//         for (let i of el) {
//             strabc +=i
//         }
//         return strabc;
//     } else {
//         return `Вы ввели не строковое значене`
//     }
// }
// console.log(returnstr(arr))

//Задача 5 
// На входе массив. Необходимо создать функцию проверки на то что в массиве 
// только числа. Если результат проверки – true, то передать массив в новую
//  функцию, возвращающую новый массив, где каждый элемент * 2 - ПЕРЕДЕЛАТЬ

//  const arr = [1, 2, 3, 4, 5, 6];

//  let checknum = (el) => {
//      let chetchik = [];
//      for (let  i of el) {
//          if (!isNaN(i)) {
//             chetchik.push(i*2)
//          } else {
//              return `Вы ввели не числовое значение`
//           }
//      } 
//      return chetchik
//  }
//  console.log(checknum(arr));

// Задача 6 
// На входе массив. Необходимо создать функцию проверки на то что 
// в массиве только числа. Если результат проверки – true, то передать
//  массив в новую функцию, возвращающую массив из только четных чисел. 

// const arr = [1, 2, 3, 4, 5, 6];

// let checknum = (el) => {
//     let arrnum = []
//     for (let i of el) {
//         if (!isNaN(i)) {
//             arrnum.push(i)
//         }
//     }
//     return (el.length == arrnum.length) ? true : false
// }
// let finedValues = (array) => {
//     let boolCheck = checknum(array)
//     if (boolCheck === true) {
//         let arrfil = array.filter(el => el % 2 === 0)
//         return arrfil
//     } else return 'ERROR'
// }

// console.log(finedValues(arr));

// Задача  7.  На входе число. Необходимо создать функцию,
//  возвращающую факториал этого числа


// let value = +prompt();

// let factorial = (el) => {
//     let res = 1;
//     for (let i = 1; i<=el; i++) {
//     res *=  i;
//     }
//     return res
// }
// console.log(factorial(value));

// Задача 8. На входе строка. Необходимо создать функцию, возвращающую true, 
// если это слово палиндром и false в противном случае

// let words = prompt();

// let checkPalindrom = (el) => {
//     let res 
//     for (let i = 0; i < words.length; i++) {
//     res =  (words === words.split('').reverse().join('')) ? true : false;
//     }
//     return res;
// }
// console.log(checkPalindrom(words));


// Задача 9.
//  На входе строка. Необходимо создать функцию, возвращающую true, 
//  если это слово анаграмма и false в противном случаe

// let wordsA = prompt().trim(); 
// let wordsB = prompt().trim(); 


// let checkAnogramm = (el) => {
//     let res 
//     for (let i = 0; i <el.length; i++) {
//         res = (wordsA.split('').sort().join('') === wordsB.split('').sort().join('')) ? true : false;
//     }
//     return res;
// }
// console.log(checkAnogramm(wordsA,wordsB));

// Задача  10. На входе массив. Необходимо создать функцию проверки на то
//  что в массиве только числа. Если результат проверки – true, 
//  то передать массив в новую функцию, возвращающую максимальное 
//  значение

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

