//Фибоначчи

let fib = + prompt(`Введите количество элементов ряда Фибоначии`);
let arr = [0,1];

if (isNaN(fib) === true) {
    console.log(`Необходимо ввести число`);
}
for (let i = 0; i < fib; i++) {
    if ( i > 2 ) {
        arr.push(arr[i-2]+ arr[i-1]);
    } else {
        arr.push(i)
    }
}
    console.log(arr);