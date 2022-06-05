// 27

// Задача 1.Напишите функцию, которая переворачивает число.

// let value = 123;
// function reverseVal (paramsVal) {
//     value = String(paramsVal);
//     let res = ``;
//     for (let i = paramsVal.length-1; i>=0; i--) {
//         res += paramsVal[i];
//     }
//     return res;
// } 
// console.log(reverseChislo);


//Задача 2. Напишите функцию, которая 
// переворачивает число.

// const valueA = `Hanna`.toLocaleLowerCase();

// const findPalindrom = (word) => {
//     let value = word.split(``);
//   if  (word == value.reverse().join(``)) return true 
//   return false
// }
// console.log(findPalindrom(valueA));


// PНапишите функцию, которая возвращает переданную 
// строку с буквами в алфавитном порядке. 'alphabetical' 
// -> 'aaabcehillpt‘

// const str = 'alphabetical';

// let doRightStr =  (el) => el.split(``).sort().join(``);
// console.log(doRightStr(str));

// Задача 4 Напишите функцию, которая принимает 
// строку в качестве параметра и находит самое длинное
//  слово в строке. 'Web Development Tutorial‘ -> 
//  "Development“

// let str  = `Web Development Tutorial`.split(` `);

// let findLongStr = (el) =>  {
//     let val = el[0];
//     el.forEach(element => element.length > val.length ? val=element : null);
//     return val;
// }
// console.log(findLongStr(str));

//Задача 5. Напишите функцию vowel_count(str), которая
//  принимает строку в качестве параметра и подсчитывает 
//  количество гласных в строке

// let input = `Loremipsum`.toLowerCase().split(``);
// let vowel_count = (set) => {
//     let vowels = [`e`, `u`, `o`, `a`,`i`]
//     let count = 0;

//     set.forEach(el => vowels.includes(el) ? count +=1 : null);
//     return count
// } 
// console.log(vowel_count(input));


// Задача 6. 
// Напишите функцию, которая принимает
//  параметр и возвращает тип. 7 –> number.

// let findTypeOfFunctionParam = (paramOfFunction) => {
//     return typeof(paramOfFunction)
// }
// console.log(findTypeOfFunctionParam(7));

// Задача 7. Напишите функцию, которая будет принимать массив 
// сохраненных чисел и находить минимальное и максимальное числа соответственно.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let findMinAndMaxValue = (maxMin) => {
//     let minval = maxMin[0]
//     let maxval = maxMin[0]
//     maxMin.forEach(el => {
//     (el > maxval) ? (maxval = el) : null; 
//     (el < minval) ? (minval = el) : null; 
//     });
//     return [minval,maxval]
// }
// findMinAndMaxValue(arr);
// console.log(findMinAndMaxValue(arr));

//Задача 8 такая же как и задача 7

// Задача 9. Пользователь вводит число. Это число – количество эл-ов массива. 
// Напишите функцию заполнения массива. Из этой функции вызовите функцию, которая 
// будет принимать массив чисел и находить минимальное и максимальное числа соответственно.


4
