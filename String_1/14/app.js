let str = prompt(`Имя Фамилия`);
let arr = str.split(` `);

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0].toUpperCase() === arr[i][0]) {
    continue
  }

  console.log(`NO`);
  break;
}
console.log(`YES`);