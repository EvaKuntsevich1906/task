// let a = prompt('aaa@bbb@ccc');
// const b = a.split("@");
// console.log(b.join("!")); - первый вариант решения задачи
//  и самый простой на мой взгляд


let a = prompt('aaa@bbb@ccc');
console.log(a.replaceAll('@', '!'));