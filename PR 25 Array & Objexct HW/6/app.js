// // 6. На вход подается объект.
// //  Необходимо посчитать количество
// //   пар (ключ: значение) где значение 
// //   число и вывести их количество

 let obj = {
     name: `Valic`,
     age: 100,
     skill: `trainee`
 },
n = 0;
for ( let val in obj) {
 n+= 1
} console.log(n);