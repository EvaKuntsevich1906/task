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


// function hello (name,surname) {
//     return `Привет` `${name},${surname}`
// }

// console.log(hello(`Ivan`,`Ivanov`) );

//Задача 2 
// . На входе массив. Необходимо создать функцию проверки
// на то что в массиве только числа. Если результат проверки
//  – true, то передать массив в новую функцию, возвращающую 
//  сумму всех элементов массива

// const arr = [1,2,3,4,5,6,];

// function chekArr (arrParam) {
//     let stringerror = 0;
//   for (let el of arrParam) isNan(el) ? (stringerror +=1) : null;
//   if (stringerror > 0)  return false;
//    return true;
// }
// function someofArray (arrParam) {
//     let newVal = chekArr(arr)
//     if(newVal == true) {
//         let sumArr = arrParam.reduce((sum, current) =>  sum + current);
//     return sumArr;
//     }else return `Error`;
// }
// let sum = someofArray(arr);
// console.log(sum);

//Задача 3 
//На входе массив. Необходимо создать функцию проверки на то
//  что в массиве только числа. Если результат проверки – true, 
//  то передать массив в новую функцию, возвращающую произведение всех
//   элементов массива.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function chekArr(arrParam) {
//     let countOfString = 0;
//     for (let i = 0; i < arrParam.length; i++) isNaN(arrParam[i]) ? (countOfString += 1) : null;
//     if (countOfString === 0) return true;
//     return false;
// }

// function mutElofArr(arrParam) {
//     let boolResult = chekArr(arrParam);
//     if (boolResult === true) {
//         let mut = 1;
//         for (let j = 0; j < arrParam.length; j++) mut *= arrParam[j];
//         return mut;
//     } else return `Error`;
// }
// let res = mutElofArr(arr);
// console.log(res);

//Задача 4
// На входе массив. Необходимо создать функцию проверки на то что в 
// массиве только строки. Если результат проверки – true, то передать 
// массив в новую функцию, возвращающую строку из всех элементов массива

//  const arr = [`abc`,`abc`,`abc`,`abc`,`abc`,`abc`];

//  const arrCheck = (array) => {
//      let errorNumber = 0;
//  }  for(let key of array) {
//      !isNaN(key) ? (errorNumb += 1) : null;
//      if (errorNumb > 0) return false;
//      return true;
//  }
//      const arrStr = (array) 
//       let value = arrCheck(array);
//      if (value === true) return array.join(``);
//      return `Error`
    
//     console.log(arrStr(str));

//Задача 5 
// На входе массив. Необходимо создать функцию проверки на то что в массиве 
// только числа. Если результат проверки – true, то передать массив в новую
//  функцию, возвращающую новый массив, где каждый элемент * 2 - ПЕРЕДЕЛАТЬ

// const arr = [1, 2, 3, 4, 5, 6];
 
// function chekArr(array) {
//     let error = 0;
//     for (let key of arr) isNaN(key) ? error +=1 : null;
//     if (error === 0) return true;
//     else return false;
// }
// function newArray(array) {
//     let boolOfCheckArray = chekArr (array);
//     if (boolOfCheckArray === true) {
//        let mapArray =  array.map(el =>  el*2);
//     } else return `error`
//  }
// console.log(newArray(arr));

// Задача 6 
// На входе массив. Необходимо создать функцию проверки на то что 
// в массиве только числа. Если результат проверки – true, то передать
//  массив в новую функцию, возвращающую массив из только четных чисел. - ПЕРЕДЕЛАТЬ

// const input = [1,2,3,4,5,6,7,8,9,10];
// function checkChet (param) {
//     return param.filter(element => element%2 === 0)
// }

// function checkNum (param) {
//    let counter = 0;
//    param.forEach(element => isNaN(element)) counter += 1;}
//        return (counter === 0) ? checkChet(param) : `Error`;
// }
// let out = checkNum(input); 
// console.log(out);



