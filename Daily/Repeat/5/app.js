const arr = [1, 2, 3, 4, 5, 6, 7];
let aa = [];
let bb = [];
let rez = 0;
let zer = 0;
let num = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        aa.push(arr[i])
    } else {
        bb.push(arr[i])
    }
}
for ( let i = 0; i<aa.length; i++) {
     rez += aa[i]
}
 for ( let i = 0; i<bb.length; i++) {
    zer =  zer + bb[i]
 }

  for (let i = 0; i<arr.length; i++ ) {
      num += arr[i]
  }

  console.log(num/arr.length);
console.log(rez);
console.log(zer);