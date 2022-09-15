// На вход подается число n – количество элементов массива. 
// Необходимо заполнить массив случайными элементами. Далее 
// пройтись по массиву, если число > 10, но < 100, то занести
//  в новый массив. Выброситm если это строка

const countElementsOfArray = 7;
// fillinValuesInArray(numberOfElements)
let findNumbersInRange = (numberOfElements) => {
    let numbersArray  = [12,13,14,16,17,15,16]
    let numbersInRange = []
    if (findNumbersInArray(numbersArray)) {
        for (let i = 0; i<numberOfElements; i++) {
            if (numbersArray[i]>=10 && numbersArray[i]<=100) numbersInRange.push(numbersArray[i])
        }
    }
    return numbersInRange 
  }

let fillinValuesInArray = (elenentsInArray) => {
    let countElementsArray = [];
    for (let i = 0; i < elenentsInArray; i++) {
        countElementsArray.push(+prompt());
    }
    return countElementsArray;
}

let findNumbersInArray = (NumbersValueInArray) => {
        let countError = 0;
        for (let i = 0; i < NumbersValueInArray.length; i++) {
            (!isNaN(NumbersValueInArray[i])) ? null: ++countError;
        }
        if (countError === 0) return NumbersValueInArray
        else throw new Error(`Массив содержит строки`)
}
console.log(findNumbersInRange(countElementsOfArray));