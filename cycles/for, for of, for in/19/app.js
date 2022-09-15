// Елочка , кол-во рядов зависит от введенного числа 

let  value = +prompt(`Введите количество числов елочки`);
let arr = [`*`]
for (let i = 1; i<=value; i++){
    console.log(arr.join(``));
        arr.push(` *`)
} 
