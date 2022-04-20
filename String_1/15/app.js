let str = prompt(`КаКаЯ-То СтРоКа`);
let arr = str.split("");
let result = " ";
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0].toUpperCase() === arr[i][0]) {
        result += arr[i][0].toLowerCase()
    } else {
        result += arr[i][0].toUpperCase();
    }
}
console.log(result);