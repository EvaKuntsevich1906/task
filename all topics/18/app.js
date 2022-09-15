// Ряд Фибоначчи. Добавить проверки по вашей
// логике (как вы считаете какие проверки здесь необходимы?)

 let numeric = +prompt(``);

 let findTheFibonacciRow = (enteredValue) => {
    try {
        if (!isNaN(enteredValue) && enteredValue>0 && Number.isInteger(enteredValue) ) {
            let fibonacciDefault = [0,1];
            for (let i = 2; i<= enteredValue; i++)
            fibonacciDefault.push(fibonacciDefault[i-1]+fibonacciDefault[i-2])
            return fibonacciDefault;
            }
            else throw new Error(`Введенное число не соответствует условию`)
    } catch (er) {
        return er
    }
    } 
    console.log(findTheFibonacciRow(numeric))