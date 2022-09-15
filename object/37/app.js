
// Задача 36.
let db = [
    {"id": "javascript", "label": "Javascript", "category": "programmingLanguages", "priority":1},
    {"id": "sql", "label": "SQL", "category": "programmingLanguages", "priority":2},
    {"id": "go", "label": "GO", "category": "programmingLanguages", "priority":3},
    {"id": "python", "label": "C++", "category": "programmingLanguages", "priority":4},
]
let input = {"id": "javascript", "label": "C++", "category": "programmingLanguages", "priority":4}
let poisk = db.filter(el => el.id !== input.id) 
if (db.length !== poisk.length) {
    poisk.push(input)
    db = poisk; 
} else {
    console.log(`Некорр ввод`);
}