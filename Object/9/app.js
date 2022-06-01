// Задача 9 

let obj = {

}
let n = 0;
for (let key in obj) {
   if (obj[key]) n += 1;
}
if (!n) console.log(false);
else console.log(true)