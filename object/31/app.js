// Задача 31 Проверьте, что в объекте есть ключ age

let obj = {
    name: `Eva`,
    age: 19,
    id: 10,
};

for ( let keys in obj) {
    keys === `age` ? console.log(`YES`)  : console.log(`NO`); ;
}