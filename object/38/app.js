// Задача 37.
let db = [
    {"id": "javascript", "label": "Javascript", "category": "programmingLanguages", "priority":4},
    {"id": "sql", "label": "SQL", "category": "programmingLanguages", "priority":4},
    {"id": "go", "label": "GO", "category": "programmingLanguages", "priority":4},
    {"id": "c++", "label": "python", "category": "programmingLanguages", "priority":4},
]
let inp = {id: "python", "label": "C++", "category": "programmingLanguages", "priority":4}
let poisk = db.filter(element =>  element.id === inp.id)
if (poisk.length>0) {
  db = db.filter(element => element.id != inp.id )
}
else console.log("Совпадений нет");
console.log(db);

