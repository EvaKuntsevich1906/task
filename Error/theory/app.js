//  Задача 1. У вас есть какае-то значение. 
// Необходимо обработать это значение.
//  Если это число, то бросить исключение

// const value = `hello,word`;
// let checkValue = (str) => {
//     try {
//         if (isNaN(str)) return str;
//         else throw new Error(`'Это числовое значение`)
//     } catch (error) {
//         return Error
//     }
// }
// console.log(checkValue(value));

// Задача 2.У вас есть какае-то значение. 
// Необходимо обработать это значение. Если 
// это число и оно не является четным, то 
// бросить исключение 

// const anyValue = 53;
// let checkisNaNOfValue = (value) => {
//     try {
//         if (isNaN(value)) throw new Error (`'Это строка`);
//         return anyValue;
//     }
// };
// const checkNumberOfValue = (value) => {
//     try {
//         let number =  checkisNaNOfValue(value);
//         if (number % 2 == 0) return value;
//         else throw new Error(`Нечетное число`)
//     } catch (e) {
// //         return e;
// //     }
// // } 
// // console.log(checkNumberOfValue(value));

// //  Задача 3.Есть массив. Необходимо проверить массив. В массиве должны быть только числа. 
// // Если же там есть хотя бы 1 строка, то бросить исключение и обработать его. 
// // Если там только строки, то удвоить каждое

// // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let checkArrayOfNum = (arrayNum) => {
// //     let countOfString = 0;
// //     for (let item of arrayNum) {
// //         (!isNaN(item)) ? true: ++countOfString;
// //     }
// //     if (countOfString > 0) throw new Error(`Имеются стрококвые значения`);
// //     else return true
// // }
// // let doubleOfEachElements = (arrayOfNumbers) => {
// //     try {
// //         let boolCheckArrayOfNum = checkArrayOfNum(arrayOfNumbers)
// //         if (boolCheckArrayOfNum === true) {
// //             let doubleArray = []
// //             for (let item of arrayOfNumbers) {
// //                 doubleArray.push(item * 2)
// //             }
// //             return doubleArray;
// //         } 
// //     } catch (e) {
// //         return  e
// //     }
// // }
// // console.log(doubleOfEachElements(array));

// // Задача 4. Дан массив внутри строки '[1,2,3,4,5]‘. Необходимо строку преобразовать 
// // в массив (JSON.parse). Если же после того как вы спарсили данные у вас не
// //  тип данных массив, то исключение. Далее вывести только те числа, которые кратны 

// // const dataParse = JSON.parse(`[1,2,3,4,5]`);

// let isArray = (dParse) => {
// let isArrayOfNumber = (array) => {
//     let countOfError = 0;
//     array.forEach(element => {
//         !isNaN(element) ? true : ++countOfError;
//     });
//     if (countOfError > 0) {
//         throw new Error(`There is a  string inside the array`);
//     } else true
// }

// let findEvenNumbers = (array) => {
//     try {
//         let boolIsArray = isArray(array)
//         if (boolIsArray === true && boolIsArray)
//         let arrrayOfEvenNumbers = array.filter((element) => element % 2 === 0);
//         return arrrayOfEvenNumbers;
//     } catch (err) {
//         return err
//     }
// };

// console.log();

// Задача 5. . Дана строка массива `[{  "name": "John",  "age": 30},{  "name": "Bob",  "age": 21},
// {  "name": "Anna",  "age": 19}]`. (Обратите внимание, что ключи тоже в кавычках, потому что это json). 
// Необходимо ее спарсить. Необходимо строку преобразовать в массив (JSON.parse). Если же после того как
//  вы спарсили данные у вас не тип данных массив, то исключение. Далее вывести те элементы массива, в котрых age> 20
// const dataParse = JSON.parse([{"name":"John","age":10},{"name":"Bob","age":11},{"name":"Anna","age":19}]);

// const isObject = (dataParse) => {
//     if (typeof (dataParse) === object) return true;
//     else throw new Error(It's not an array);
// }

// const findItemInRange = (array) => {
//     try {
//         if (isObject(array)) {
//             let outArray = array.filter(element => element["age"] > 20)
//             if (outArray.length > 0) return outArray;
//             else throw new Error(There is not a key > 20)
//         }
//     } catch (error) {
//         return error
//     }
// }
// console.log(findItemInRange(dataParse));