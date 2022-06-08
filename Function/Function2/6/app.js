// Задача 6. 
// Напишите функцию, которая принимает
//  параметр и возвращает тип. 7 –> number.

let findTypeOfFunctionParam = (paramOfFunction) => {
    return typeof(paramOfFunction)
}
console.log(findTypeOfFunctionParam(7));