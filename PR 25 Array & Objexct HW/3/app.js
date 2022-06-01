//  Имеется массив объектов.
//  Получите из этого массива объект,
//   где name === "Bob" и сохраните это в какой-либо переменной.
let arr = [
     { 
         name: `John`,

    }, 
    { 
         name: `Bob`,

    }, 
     { 
         name: `Loh`,

    }, 
     { 
         name: `Valic`,

    }, 
]
let res = arr.filter (el => el.name === `Bob`);
console.log(res);
