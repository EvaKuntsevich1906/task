
//  Решить ряд Фибоначчи. Рузальтат массива запистаь в объект под ключ19.


let value = +prompt(``);
let arr = [0,1];
let obj = {
}

 for (let i = 2; i<value; i++){
     arr.push(arr[i-1]+ arr[i-2]);
 }
 obj.kluch = arr;

 console.log(obj);