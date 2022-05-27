// Пользователь вводит число, являющееся количеством элементов массива. 
// Далее вводит сами элементы. Необходимо найти произведение всех элементов массива

// const num = +prompt();
// let arr = [];
// let result = 1;

// for (let i = 0; i < num; i++) {
//     arr.push(+prompt(``))
// }
// for (let i = 0; i < arr.length; i++) {
//     result *= arr[i]
// }
// console.log(result);


// Пользователь вводит число, являющееся количеством элементов массива. 
// Далее вводит сами элементы. Необходимо найти максимальное число используя цикл

// const num = +prompt(``);
// let arr = [];
// let result;

// for (let i = 0; i < num; i++) {
//     arr.push(+prompt(``));
// }
// for (let i = 0; i < arr.length; i++) {
//     if (i === 0) result = arr[i];
//     if (arr[i] > result) {
//         result = arr[i]
//     }
// }
// console.log(result);

// const str = `Stroka`;
// let result = ``;

//  for (let i = str.length - 1; i>= 0; i--) {
//      result += str[i]
//  } console.log(result);

// В массиве оставить только уникальные значения [0, 1,0, 0, 2, 3, 4, 5, 5, 1] -> [2, 3, 4]

// const arr = [0, 1, 0, 0, 2, 3, 4, 5, 5, 1].sort();
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1] || arr[i] === arr[i - 1]) {
//         continue
//     } else {
//         result.push(arr[i]);
//     }
// }
// console.log(result);


// Ряд Фибоначчи

// const fib = +prompt(`Введите число`);
// let arr = [0,1];

// for (let i = 0; i < fib; i++) {
//     if (i >= 2) {
//         arr.push(arr[i - 2] + arr[i - 1]);
//     }
// }
// console.log(arr);

//  Аннограмма

//  let a = prompt(``).toUpperCase().trim().split(``).sort().join(``);
//  let b = prompt(``).toUpperCase().trim().split(``).sort().join(``);

//  if ( a === b) { 
//      console.log(true);
//  }

//Палиндром 


// const a = `djfsfkh!!!!&%^%^&#&#^&jfhs`.replaceAll(`!`, "_");

//  aconsole.log(a);


// const arr = [1,2,3,4,5];

// for ( let i = 0; i,arr.length; i++) {
//     if (arr[i]%2 === 0) {
//         console.log(`${arr[i]} - четное`);
//     } else {
//         console.log(`${arr[i]} - нечетное`);
//     }
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];
// let aa = [];
// let bb = [];
// let rez = 0;
// let zer = 0;
// let num = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         aa.push(arr[i])
//     } else {
//         bb.push(arr[i])
//     }
// }
// for ( let i = 0; i<aa.length; i++) {
//      rez += aa[i]
// }
//  for ( let i = 0; i<bb.length; i++) {
//     zer =  zer + bb[i]
//  }

//   for (let i = 0; i<arr.length; i++ ) {
//       num += arr[i]
//   }

//   console.log(num/arr.length);
// // console.log(rez);
// // console.log(zer);


// const anya = 1;
// const eva = 1;

// if (anya === eva === true) {
//   console.log(`Дружба`);
// } else {
//   console.log(`Нужно сделать так, чтобы true`);
// }

// Первая задача из 22 пр
// const txt = prompt(``).split(``);
// let arr = [];
// let rez = arr.indexOf();
// for (let i=0; i<txt.length; i++){
//     if (txt[i]===`f`) {
//         arr.push(i);
//     } else console.log('NO');
// }
// if (arr.length > 1) {
//     console.log(arr[0], arr[arr.length-1]);
// } else console.log(arr[0]);

// вторая задача из пр 22

// let a = prompt('aaa@bbb@ccc');
// console.log(a.replaceAll('@', ''));

// третья задача из пр 22


// На вход программе подаются 4 числа с клавиатуры. Необходимо найти минимальное и максимальное c помощью цикла
// let input = [1,2,3,4]
// let maxin;
// let minin;
// for (let i = 0; i<=input.length; i++) {
//     if (i === 0) {
//          maxin = input[i];
//          minin = input[i];
//     }
//     if (input[i]>maxin) maxin = input[i];
//     if (input[i]<minin) minin = input[i];
// }
// console.log(maxin, minin);


// Есть строка. Найти все согласные

// const str = `friends`;
// const glas = [`a`, `e`, `o`, `i`, `u`];
// let arr = [];
// for (let i = 0; i<str.length; i++){
//     if (glas.includes(str[i])) {
//        arr.push(str[i])
//     }
// } 
// console.log(str.length-arr.length);


// Изменить дату ( развпернуть и заменить -)

// let date = `2025-12-31`.replaceAll(`-`,`/`).split(`/`).reverse().join(`/`)
// console.log(date);

// Преобразуйте строку 'var_test_text' в 'varTestText'.
// Скрипт, конечно же, должен работать с любыми аналогичными строками

// let txt = `var_test_text`.split(``);
// let result = [];
// for (let i = 0; i < txt.length; i++) {
//     if (txt[i - 1] === `_` && txt[i] != `_`) {
//         result.push(txt[i].toUpperCase())
//     } else if (txt[i] != `_`) {
//         result.push(txt[i])
//     } else {
//         continue
//     }
// }
// console.log(result.join(``));


// Массив. Необходимо сделать 2 массива, в одном будут четные числа, во втором нечетные

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let nech = [];
// let chet = [];

// for (let i = 0; i<arr.length; i++){
//     if (arr[i]%2 === 0) {
//         chet.push(arr[i])
//     } else {
//         nech.push(arr[i])
//     }
// } 
// console.log(`Нечетные ${nech}`);
// console.log(`Четные ${chet}`);

//Факториал числа 

// let value = +prompt(`Введите число`);
// let fac = 1;
// for( let i = 0; i<value; i++) {
//     fac *=  i+1
// } console.log(fac);


// Елочка , кол-во рядов зависит от введенного числа 

// let  value = +prompt(`Введите количество числов елочки`);
// let arr = [`*`]
// for (let i = 1; i<=value; i++){
//     console.log(arr.join(``));
//         arr.push(` *`)
// } 

// циклы while  и do while

// let i = 0;
// while (i < 50) {  // пока i меньше 50 выполняется
//     alert(i);
// }

// ! Если инструкция всего одна, то фигурные скобки можно не писать! 

// let result = '';
//     let n = 0;

//     do {
//         n = n + 1;
//         result = result + n;
// console.log("result = " + result)  //сумма строк от 1 до 10
//     } while (n < 10);    



// let result = '';
//     let n = 0;

//     do {
//         n = n + 1;
//         result = result + n;
//         console.log("result = " + result)
//     } while (n < 10);    



// ЦИКЛЫ WHILE И DO WHILE
// первая задача из 23 презентации 

// let i = 0;
// while (i < 50) {  // пока i меньше 50 выполняется
//     alert(i);
// }


// for (let i = 0; i<=50)
// задача 2 из пр 23

//  let  arr = [1,2,3,4,5];

//  for (let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
//  }
//  let i = 0;
//  while (i<arr.length) {
//     console.log(arr[i]);
//     i++;
//  }

//  for (let value of arr) {
//      value +=1;
//  }

//  задача 3 

//  let arr = [2,3,4,5];
//  let rez = 1;
//  for (let i = 0; i <arr.length; i++) {
//     rez *= arr[i];
//  } console.log(rez);


// задача 3 через WHILE 

// let arr = [2,3,4,5];
// let i = 0;
// let rez = 1;

// while (i<arr.length) {
//    rez *= arr[i];
//    i++
// }
//  console.log(rez);

//  for (let i =11;i<34;i++){
//     console.log(i);
//  }

// задача 5 
// for (let i = 0; i <= 100; i++) {
//    if (i % 2 === 0) {
//       console.log(i);
//    } 
// }


// задача 6

// let i = 0;
//   rez = 0;

//   while (i <=100) {
//      rez  += i;
//      i++
//   } console.log(rez);

// задача 8 

// const arr = [1,2,3,4,5];

// for (let value of arr) {
//    value += i;
// }
// console.log(rez);


//  задача 9 

// let arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
// let rez = [];
// for (let i = 0; i < arr.length; i++) {
//    if (!rez.includes(arr[i])) rez.push(arr[i]);
// }
// console.log(rez);

//  задача 10 

// const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
// let rez = [];
//  for (let value of arr){ 
//      if (! rez.includes(value)) rez.push(value)
//  } console.log(rez);

//  // задача 10 
// //  const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
// //  i = 0;
// //  rez = 0;
// //  while (i<arr.length) {
// //     if (!rez.includes(arr(i)));
// //     i++
// //  }



// const arr = [2,5,9,15,0,4] ;


// const arr_ = [2, 5, 9, 15, 0, 4];
// let i = 0;
// while (i < arr_.length) {
//    if (arr_[i] % 5 === 0) console.log(arr_[i])
//    i++
// }



// const arr = [10,20,30,50,235,3000]; 
// let arrStr = [];

// for (let i = 0; i<arr.length; i++) {
//    arrStr.push(String(arr[i]));
// }
//  for (let i of arrStr) {
//     if (i[0] == `1` && i[0] == `2` && i[0]==`5`) 
//     console.log(arrStr);
//  }

// const arr = [1,2,3,4,5,6,7,8,9].join(`-`);
//  let concatStr = '';
//  for (let i = 0; i < arr.length; i++) {
//  if (i === 0) concatStr += `${arr}`;
//  else if (i === arr.length - 1) concatStr += `-`
//  } 

// let res = [];
// for (let i = 0; i <= 100; i++) {
//    if (i % 7 === 0) {
//       res.push(i)
//    }
// } 
// console.log(res);


// задача 19

// const txt = `Hello`;
//  let i = 0;
//   for (let i = 0; i <10; i++){
//       console.log(`${i} ${txt}`);
//   }


// Объекты

//   var cat = new Object();
//   cat.legs = 4;
//   cat.name = "CAT"; 
//   cat.color = "Рыжий";



//1

// let user = {};

// user.name = `John`;
// user.surname = `Smith`;
// user.name = `Pete`;
// delete user.name;

// 2 задача 


//  let user =  {
//     name: `John`,
//     age: 30, 
//     1: 20
//  }
//  for (let key in user) {
//     if (! isNaN(key)) {
//        console.log(key);
//     }
//  }
//  console.log(``);

// 3 задача

// let user = {
//    name: `Eva`,
//    age: 29,
//    id: 10,
// };
//  for (let num in user) {
//     if (! isNaN(user.num)) {
//        console.log(user.num);
//     }
//  } 
//  console.log();

// 4  задача 

// let user = {
//    name: `John`,
//    age: 30,
//    num: 21,
//    skill: 50,
//  }

//  for (let key in user) {
//    if (!isNaN(user[key])) {
//      if (user[key] % 2 === 0) console.log(user[key]);
//    }
//  }
//  console.log(j);

// 5 задача

// const user = {
//    a: 1,
//    b: 2,
//    c: 3,
//    d: 4,
//    e: 5,
// }, 
// arr = [];

// for   -  ДОРЕШАТЬ


// 6 задача

//  const user = {
//     name: `Eva`,
//     age: 19,
//     1: 27,
//  }
//  for (let key in user){ 
//     if ( ! isNaN(user[key])) console.log(user[key]**2);
//  }

//  console.log(`h`);


// задача 7 

// const user = {
//       name: `Eva`,
//       age: 19,
//       1: 27
//    },
//    arr = [];

// for (let key in user) {
//    !isNaN(user[key]) ?  arr.push(user[key]**2) : null 
// }


// Задача 8 

// let user = {
//    name: `Eva`, 
//    age: `19`,
//    4: `10`,
//    test: `Hi`,
// }
// let str = ``;
// for (let key in user) {
//    if(isNaN(user[key])) {
//       str += user[key];
//    }
// }
// console.log(str);

// Задача 9 

// let obj = {

// }
// let n = 0;
// for (let key in obj) {
//    if (obj[key]) n += 1;
// }
// if (!n) console.log(false);
// else console.log(true)

// Задача 10 

// const  user = {
//    a: `1`,
//    v: `2`,
// };
// let rez = 0;

// for (let key in user) {
//    if (key) rez +=1;
// }
// console.log(rez);

// задача 11

// let user = {
//    a: `1`,
//    v: `2`,
// }
// rez = 0;

// for ( let key in user){ 
//    if( ! isNaN(user[key])) {
//       if(key) rez +=1

//    }
// }
// console.log( rez);

// задача 12

// let a = prompt()
// let b = prompt()
// let c = prompt()
// let d = prompt()

// let user = {
//    name: null, 
//    age: null, 
//    birthday: null, 
//    status: null, 
// }
//  if (isNaN(a) && isNaN(b) && isNaN(c) && isNaN(d)) {
//     user.name = a;
//     user.age = b;
//     user.birthday = c;
//     user.status = d;
//  }
// console.log(user);


// задача 13 

//  let obj = {

//  };

//  let a = prompt (``);
//  let b = prompt(``);
//  obj.avg = (a+b/2);
//  console.log(obj);


// 14 задача
// 14. У вас изначально задан пустой объект obj.
// С клавиатуры вводится первоначально число n,
// символизирующее количество элементов массива. 
// Далее вводятся сами числа массива. Необходимо в
// наш  объект под ключ «avg» вставить среднее арифметическое
// всех введенных с клавиатуры чисел.

// let obj  = {
// }
//  let n = +prompt();
//  let arr = [];
//  let res = 0;
//  for ( let i = 0; i<n; i++) {
//  arr.push(+prompt());
//  res += arr[i]
//  } 
//  obj.avg = (res/n)
//  console.log(obj);

// 15 задача
// Пользователь вводит с клавиатуры число, символизирующее 
// в последующем количество рандомно сгенерированных элементов
// массива (Используем гугл как получить определенное количество
// рандомных элементов). Далее необходимо заполнить пустой объект,
// где ключ arr, а значение – рандомно сгенерированный массива.


// let n = +prompt();
//  let obj  = {
// }
// let arr = [];
// let a = 1;
// let b = 100;

// for (let i = 0; i<n; i++) {
//     arr.push(Math.round(Math.random()* (b-a)+a));
// }
// obj.arr = (arr)
// console.log(obj);


//16 задача
// 16. Пользователь вводит с клавиатуры число n, символизирующее в 
// последующем количество ключей в объекте (ключи генерируются автоматически
// от 1 до n). К каждому ключу добавляем значения строки, символизирующие 
// города (города вводим через prompt). Необходимо пробежаться по всем значениям 
// объекта и если в нем есть «Минск», вывести true, в противном случае false.

// let count = +prompt();
// let obj = {}

// for (let i = 0; i < count; i++) {
//     obj[i] = prompt(`Введите название города ${i}`).trim(``).toLowerCase(``)
//     if (obj[i] === `минск`) {
//         console.log(true);
//         break
//     } else {
//         console.log(false);
//     }
// }

//17 задача 

// На входе есть объект с повторяющимися значениями. 
// Необходимо отфильтровать значения объекта и оставить 
// только уникальные значения.

// let obj = {
//     name:`John`,
//     age:`Hanna`,
//     birth:`Eva`,
//     adress:`Valik`,
//     name:`John`,
// }
// let arr = Object.values(obj);
// let rar = Object.keys(obj)
// let res = [];
// for (let i = 0; i<obj; i++) {
//   if (! arr[i]===arr[i+1]){
//       continue
//   } else {
//    delete obj[rar[i]]
//   }
// } console.log(obj);

// 18 задача

// Необходимо вывести зарплаты Даши и Васи

// let obj = {
// 'Коля': 1000,
// 'Вася': 500,
// 'Петя': 200,
// 'Даша': 4000,
// 'Наташа': 600,
// } 
//  let arr = Object.keys(obj);
//  let rar = Object.values(obj)
//  let res = [];

//  for (let i = 1; i<arr.length; i++) {
//    if (arr[i] == 'Даша' || arr[i] == 'Вася') {
//     res.push(rar[i])
//    }  
// } console.log(res);


// 19 задача

// Решить ряд Фибоначчи. Рузальтат массива запистаь в объект под ключ

 let obj = {

 }

 let n = +prompt 