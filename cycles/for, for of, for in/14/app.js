
// На вход программе подаются 4 числа с клавиатуры. Необходимо найти минимальное и максимальное c помощью цикла
let input = [1,2,3,4]
let maxin;
let minin;
for (let i = 0; i<=input.length; i++) {
    if (i === 0) {
         maxin = input[i];
         minin = input[i];
    }
    if (input[i]>maxin) maxin = input[i];
    if (input[i]<minin) minin = input[i];
}
console.log(maxin, minin);