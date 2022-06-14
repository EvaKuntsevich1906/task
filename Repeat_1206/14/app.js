// У вас изначально задан пустой объект obj. 
// С клавиатуры вводятся 2 числа и записываются соответственно, 
// как: a, b. Необходимо в наш объект под ключ «avg» вставить среднее
//  арифметическое значение введенных с клавиатуры чисел (a + b) 

let obj = {

}
let a = +prompt(`Введите число a`);
let b = +prompt(`Введите число b`);


let findTheArithmeticMean = (elements, el1, el2) => {
    elements.avg = (el1 + el2) / 2
    return elements.avg
}
console.log(findTheArithmeticMean(obj, a, b));