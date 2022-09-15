// let a = prompt('Я-учу-javascript!');
// const b = a.split("-");
// console.log(b.join("!")); - первый вариант решения задачи
//  и самый простой на мой взгляд


let a = prompt('Я-учу-javascript!');
console.log(a.replaceAll('-', '!'));