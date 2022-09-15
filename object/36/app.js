// Задача 36.
let base = [{
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
        "id": "python",
        "label": "python",
        "category": "programmingLanguages",
        "priority": 4
    },
]
let input = {
    "label": "C++",
    "category": "programmingLanguages",
    "priority": 4
}
let value = base.filter(el => el.label === input.label);
if(value.length>0) console.log('oshibka')
else {
    base.push({id: input.label.toLowerCase(), ...input})
}