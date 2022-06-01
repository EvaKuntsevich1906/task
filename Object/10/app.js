// Задача 10 

const  user = {
   a: `1`,
   v: `2`,
};
let rez = 0;

for (let key in user) {
   if (key) rez +=1;
}
console.log(rez);
