// 25 задача

// Необходимо вывести зарплаты Даши и Васи

let obj = {
'Коля': 1000,
'Вася': 500,
'Петя': 200,
'Даша': 4000,
'Наташа': 600,
} 
 let arr = Object.keys(obj);
 let rar = Object.values(obj)
 let res = [];

 for (let i = 1; i<arr.length; i++) {
   if (arr[i] == 'Даша' || arr[i] == 'Вася') {
    res.push(rar[i])
   }  
} console.log(res);