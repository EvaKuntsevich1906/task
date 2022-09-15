
// Есть строка. Найти все согласные

const str = `friends`;
const glas = [`a`, `e`, `o`, `i`, `u`];
let arr = [];
for (let i = 0; i<str.length; i++){
    if (glas.includes(str[i])) {
       arr.push(str[i])
    }
} 
console.log(str.length-arr.length);
