// // let a = `5`;
// // let arr = [0, 1];

// // if (isNaN(a)) {
// //     console.log(`Ошибка ввода`);
// // } else {
// //     a = +a;
// //     for (let i = 0; i < a; i++) {
// //         arr.push(arr[i - 1] + arr[i - 2])
// //     }
// // }

// let a = prompt();
// let b = [`a`,`e`,`i`,`u`,`o`];
// let result = 0;
// for (let i = 0; i<a.length; i++) {
//     if (b.includes(a[i])) {
//         result++
//     }
// } alert(result)

// const a = +prompt(``);
// const arr = [];
// let rez = 0;

// for (let i = 0; i < a; i++) {
//   const b = +prompt(``);
//   arr.push(b);
// }
// for (let i = 0; i < arr.length; i++) rez += arr[i];


// const arr = [1,2,3,4,5];
// const a;
// for (let i = 0; i< arr.length; i++)  {
//     if (arr[i] === arr[0]) a = arr[i];
//     if (arr[i] > a) a = arr[i]

// }

// const aa = +prompt(``);
// const bb = [];
// let rerz = 0;

// for (let i = 0; i < aa.length; i++) {
//     const cc = prompt (``);
//     bb.push(cc);
// }
// for (let i = 0; i<bb.length; i++){
//     if (i === 0) rez = bb[i];

// }


// const valueA = `Privet`;
// let valueB = valueA.split (``);
// let arr = [];

// for (let i = valueB.length -1; i <= valueB.length && i >= 0; i--){
//     arr.push(valueB[i]);
// }
// console.log(arr.join(``));

// const str = `Privet`;
// let result = ``
// for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
// }
// console.log(result);

const  a = prompt (``);
const arra = a.split(``). reverse(``).join(``);

if (a === arra) {
    console.log(true);
} else {
    console.log(false);
}
