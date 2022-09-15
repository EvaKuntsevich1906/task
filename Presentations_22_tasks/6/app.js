
// Изменить дату ( развпернуть и заменить -)

let date = `2025-12-31`.replaceAll(`-`,`/`).split(`/`).reverse().join(`/`)
console.log(date);
