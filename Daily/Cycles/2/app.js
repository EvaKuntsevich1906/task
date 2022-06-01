
// for (let i = 0; i<=50)
// задача 2 из пр 23

 let  arr = [1,2,3,4,5];

 for (let i = 0; i<arr.length; i++){
    console.log(arr[i]);
 }
 let i = 0;
 while (i<arr.length) {
    console.log(arr[i]);
    i++;
 }

 for (let value of arr) {
     value +=1;
 }