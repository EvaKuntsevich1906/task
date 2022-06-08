//Задача 15(12). На входе массив. Необходимо создать функцию, возвращающую массив
//  из всех четных чисел, возведенных в квадрат

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let checkValNumberOfArray = (el) => {
    let count = 0;
    for (let i of el) {
        (isNaN(i)) ? true: ++count;
    }
    return (count > 0) ? false : true

    let checkParityOfElement = (element) => {
        if (checkValNumberOfArray(element)) {
            let parityArray = [];
            for (let i of element) {
                if (i % 2 === 0) {
                    parityArray.push(i ** 2)
                }
            } return parityArray
        } else return `Error`
    }
} 
 console.log(checkParityOfElement(arr));