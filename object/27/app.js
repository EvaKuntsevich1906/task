//  Задача 27. Анаграмма. Решить являются ли 2 строки анаграммами. 
// Если да, то в ключ объекта добавить true, в противном случае false

let str = prompt(``).trim().toUpperCase().replaceAll(/[^a-za-яё]/g, ``);
let rts = prompt(``).trim().toUpperCase().replaceAll(/[^a-za-яё]/g, ``);

let anno = str.split(``).sort().join();
let gramm = rts.split(``).sort().join();

let obj = {

}
if (anno === gramm) {
    obj.kluch = true;
} else {
    obj.kluch = false;
}
console.log(obj);