// Задача 8. На входе строка. Необходимо создать функцию, возвращающую true, 
// если это слово палиндром и false в противном случае

let words = prompt();

let checkPalindrom = (el) => {
    let res
    for (let i = 0; i < words.length; i++) {
        res = (words === words.split('').reverse().join('')) ? true : false;
    }
    return res;
}
console.log(checkPalindrom(words));