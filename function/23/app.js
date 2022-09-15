//  Задача 23. Есть массив из объектов. В каждом объекте есть ключ age.
// Необходимо сфоромировать новый объект с ключом avg, который хранит среднее 
// число из всех объектом массива под ключом age

let arrOfObj = [
    {
        age: 18
    },
    {
        age: 3
    },
    {
        age: 33
    },
]
let checkStringValueOfArray = (el) => {
    let count = 0;
    for (let i of el) {
        (!isNaN(i.age)) ? true : ++count;
    } 
    return  (count>0) ? false : true
}
let sredneeArifmeticheckoe = (el) => {
    if (checkStringValueOfArray(el)) {
        let srednee = 0
        for ( let i of el) {
            srednee += i.age 
        }
        return srednee/el.length
    } else return `Error`
}
console.log(sredneeArifmeticheckoe(arrOfObj));
