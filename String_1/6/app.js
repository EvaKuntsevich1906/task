let str = 'я учу javascript!'; //1 задание - нахождение длины строки
console.log(str.length);
let strINDEXOFF = str.split(" ");
let strINDEXOFFNEW = strINDEXOFF.indexOf("учу"); //нахождение индекса элемента
console.log(strINDEXOFFNEW);

let strA = 'я учу javascript!';
console.log(`SUBSTR: ${strA.substr(2,3)+" "+(strA.substr(6,10))}`); //1 способ

let strB = 'я учу javascript!';
console.log(`SUBSTRING: ${strB.substring(2,5)+" "+(strB.substring(6,16))}`); //2 способ

const strС = (`я учу javascript!`); //3 способ
console.log(`SLICE: ${strС.slice(2,5)} ${(strС.slice(6,16))}`);