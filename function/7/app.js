// Задача  7.  На входе число. Необходимо создать функцию,
//  возвращающую факториал этого числа


let value = +prompt();

let factorial = (el) => {
    let res = 1;
    for (let i = 1; i<=el; i++) {
    res *=  i;
    }
    return res
}
console.log(factorial(value));