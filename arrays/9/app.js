// Задача 9.
let arr = [].sort();
let newArr = [];
for (let i = 0; i < 5; i++) {
    const value = +prompt();
    (!isNaN(value)) ? arr.push(value): console.log('nekkorectni vvod');
}
arr.forEach(el => {
    if (!newArr.includes(el)) newArr.push(el);
})
console.log(newArr);