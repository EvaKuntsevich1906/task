// С клиента вам приходит объект
// Необходимо найти id клиента в объекте сервера.
// Если совпадение есть, то удалить тот элемент в массиве 
// (любым способом), можно даже перезаписать массив, отфильтровать 
// (filter) и добавить новый, клиентский, тем самым обновив объект сервера
// Если же совпадений по id нет, то исключение

let db = [{
        "id": "javascript",
        "label": "Javascript",
        "category": "programmingLanguages",
        "priority": 4
    },
    {
        "id": "sql",
        "label": "SQL",
        "category": "programmingLanguages",
        "priority": 4
    },
    {
        "id": "go",
        "label": "GO",
        "category": "programmingLanguages",
        "priority": 4
    },
    {
        "id": "c++",
        "label": "python",
        "category": "programmingLanguages",
        "priority": 4
    },
]
let findByID = (database) => {
    try {
        let inp = {
            id: "c++",
            "label": "C++",
            "category": "programmingLanguages",
            "priority": 4
        }
        let poisk = database.filter(element => element.id === inp.id)
        if (poisk.length > 0) {
            database = database.filter(element => element.id != inp.id)
        } else throw new Error(`Ошибка ввода`)
    } catch (error) {
        return error
    }
}