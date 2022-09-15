// Задача 8 

let user = {
   name: `Eva`, 
   age: `19`,
   4: `10`,
   test: `Hi`,
}
let str = ``;
for (let key in user) {
   if(isNaN(user[key])) {
      str += user[key];
   }
}
console.log(str);