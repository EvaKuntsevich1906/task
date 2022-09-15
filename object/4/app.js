// 4  задача 

let user = {
   name: `John`,
   age: 30,
   num: 21,
   skill: 50,
 }

 for (let key in user) {
   if (!isNaN(user[key])) {
     if (user[key] % 2 === 0) console.log(user[key]);
   }
 }
 console.log(j);