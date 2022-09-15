//24 задача 

// На входе есть объект с повторяющимися значениями. 
// Необходимо отфильтровать значения объекта и оставить 
// только уникальные значения.

let obj = {
    name:`John`,
    age:`Hanna`,
    birth:`Eva`,
    adress:`Valik`,
    name:`John`,
}
let arr = Object.values(obj);
let rar = Object.keys(obj)
let res = [];
for (let i = 0; i<obj; i++) {
  if (! arr[i]===arr[i+1]){
      continue
  } else {
   delete obj[rar[i]]
  }
} console.log(obj);