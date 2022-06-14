// С клиента вам приходит объект без id
// Вам необходимо сначала прочитать тот массив объектов, который уже есть, если там нет такого же label, то
// 1. Сформировать id. И добавить к нынешнему клиентскому объекту (id – label, только в маленьком регистре) 
// Если же в массиве найдется объект с таким же label, то исключение

let db = [{
        "id": "javascript",
        "label": "JavaScript",
        "category": "programmingLanguages",
        "priority": 1
    },
    {
        "id": "sql",
        "label": "SQL",
        "category": "programmingLanguages",
        "priority": 2
    },
    {
        "id": "java",
        "label": "Java",
        "category": "programmingLanguages",
        "priority": 3
    },
    {
        "id": "go",
        "label": "GO",
        "category": "programmingLanguages",
        "priority": 1
    },
    {
        "id": "C#",
        "label": "C#",
        "category": "programmingLanguages",
        "priority": 4
    },
]

let findByID = (database) => {
    try {
        let input = {
            "id": "javascript",
            "label": "C++",
            "category": "programmingLanguages",
            "priority": 4
        }
        let poisk = database.filter(el => el.id !== input.id)
        if (database.length !== poisk.length) {
            poisk.push(input)
            database = poisk;
            return poisk;
        } else throw new Error(`Некорректный ввод`)
    } catch (error) {
    return error
}
}
console.log(findByID(db));