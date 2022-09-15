// Задача 5. . Дана строка массива `[{  "name": "John",  "age": 30},{  "name": "Bob",  "age": 21},
// {  "name": "Anna",  "age": 19}]`. (Обратите внимание, что ключи тоже в кавычках, потому что это json). 
// Необходимо ее спарсить. Необходимо строку преобразовать в массив (JSON.parse). Если же после того как
//  вы спарсили данные у вас не тип данных массив, то исключение. Далее вывести те элементы массива, в котрых age> 20


const dataParse = JSON.parse([{"name":"John","age":10},{"name":"Bob","age":11},{"name":"Anna","age":19}]);

const isObject = (dataParse) => {
    if (typeof (dataParse) === object) return true;
    else throw new Error(`It's not an array`)
}

const findItemInRange = (array) => {
    try {
        if (isObject(array)) {
            let outArray = array.filter(element => element["age"] > 20)
            if (outArray.length > 0) return outArray;
            else throw new Error(`There is not a key > 20`)
        }
    } catch (error) {
        return error
    }
}
console.log(findItemInRange(dataParse));