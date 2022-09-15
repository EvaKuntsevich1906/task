let fib = +prompt(`Введите числовое значение`);
let arr = [];

if (isNaN(fib) === true) {
    alert(`Введите числовое значение`)
}
for (let i = 0; i < fib; i++) {
    if (i > 2) {
        arr.push(arr[i - 2] + arr[i - 1]);
    } else {
        arr.push(i);
    }
}
alert(arr); 