let height = +prompt(`введите высоту прямоугольника`)
let width = 19;
let rezult = "";
let star = "*";
for (let i = 0; i < height; ++i) {
    for (let j = 0; j < width; ++j) {
        rezult += "*";
    }
    rezult += `\n`;
}
console.log(rezult);