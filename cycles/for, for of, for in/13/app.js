
const txt = prompt(``).split(``);
let arr = [];
let rez = arr.indexOf();
for (let i=0; i<txt.length; i++){
    if (txt[i]===`f`) {
        arr.push(i);
    } else console.log('NO');
}
if (arr.length > 1) {
    console.log(arr[0], arr[arr.length-1]);
} else console.log(arr[0]);