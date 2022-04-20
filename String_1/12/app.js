let str = `привет мир`;
let arr = str.split(` `);
let result = " ";
for (let i = 0; i < arr.length; i++) {
    result += arr[i][0].toUpperCase() + arr[i].slice(1) + " "
}
console.log(result);