const arr = [10,20,30,50,235,3000]; 
let arrStr = [];

for (let i = 0; i<arr.length; i++) {
   arrStr.push(String(arr[i]));
}
 for (let i of arrStr) {
    if (i[0] == `1` && i[0] == `2` && i[0]==`5`) 
    console.log(arrStr);
 }