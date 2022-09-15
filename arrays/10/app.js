// Задача 10
const arr = [1,2,3,4,5];
let val  = +prompt();
const count = Math.ceil(arr.length / val);
let arr1 = [];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
  arr1.push(arr[i]);
  if (arr1.length === val) {
    arr2.push(arr1);
    arr1 = [];
  } else if (arr2.length + 1 === count) {
    arr2.push(arr1);
  }
}
console.log(arr2);