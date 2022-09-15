// . На входе подаются 5 значений, данные значения мы вводим с клавиатуры методом prompt. 
// Из данных элементов составить массив. Далее необходимо пройтись по каждому из элементов массива и если это число, 
// то занести его в новый массив. Если длина массива равна 0, то бросить исключение. Обработать исключение.

const valuesOfArray = 5;
let fillingValuesInArray = (values) => {
    let fillValuesOfArray = [];
    for (let i = 0; i <values; i++) {
        fillValuesOfArray.push(+prompt(``));
    }
    return fillValuesOfArray;
}
let checkNumbersValuesOfArray = (NumberValuesOfArray) => {
    try {
        let boolfillValuesOfArray = fillingValuesInArray(NumberValuesOfArray);
        let pushNumbersValues = [];
        if (boolfillValuesOfArray) {
            for (let i = 0; i < NumberValuesOfArray; i++) {
                if (!isNaN(boolfillValuesOfArray[i])) {
                    pushNumbersValues.push(boolfillValuesOfArray[i])
                    if (pushNumbersValues.length === 0) {
                        throw new Error(`Вы не ввели ни одного числового значения`)
                    }
                } else throw new Error(`Вы ввели строку`)
            }
        }
        return pushNumbersValues;
    } catch (error) {
        return error
    }
}
console.log(checkNumbersValuesOfArray(valuesOfArray));