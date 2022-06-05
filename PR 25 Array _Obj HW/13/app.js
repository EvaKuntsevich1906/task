// 13
const count = +prompt();
let arr = [];
for (let i = 0; i < count; i++) {
    const value = prompt('');
    arr.push(value);
}
let newArr = arr.filter(el => {
    if (!isNaN(el)) return el;
})
console.log(newArr);
