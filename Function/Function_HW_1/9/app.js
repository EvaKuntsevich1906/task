// Задача 9.
//  На входе строка. Необходимо создать функцию, возвращающую true, 
//  если это слово анаграмма и false в противном случаe

let wordsA = prompt().trim(); 
let wordsB = prompt().trim(); 


let checkAnogramm = (el) => {
    let res 
    for (let i = 0; i <el.length; i++) {
        res = (wordsA.split('').sort().join('') === wordsB.split('').sort().join('')) ? true : false;
    }
    return res;
}
console.log(checkAnogramm(wordsA,wordsB));