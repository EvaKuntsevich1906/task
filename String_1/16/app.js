let str = prompt(`Введите текст`).toLowerCase();
substring = `хорош`.toLowerCase();
if (str.includes(substring) === true) {
    console.log(`YES`)
} else {
    console.log(`NO`)
}