

let db = [
    {"id": "javascript", "label": "Javascript", "category": "programmingLanguages", "priority":1},
    {"id": "sql", "label": "SQL", "category": "programmingLanguages", "priority":2},
    {"id": "go", "label": "GO", "category": "programmingLanguages", "priority":3},
    {"id": "python", "label": "C++", "category": "programmingLanguages", "priority":4},
]

let client = { "label": "C++", "category": "programmingLanguages", "priority":4}
l
 let flag = db.some(el => el.label === client.label);
     console.log(flag)
 

let db = [
        {"id": "javascript", "label": "Javascript", "category": "programmingLanguages", "priority":1},
        {"id": "sql", "label": "SQL", "category": "programmingLanguages", "priority":2},
        {"id": "go", "label": "GO", "category": "programmingLanguages", "priority":3},
        {"id": "python", "label": "C++", "category": "programmingLanguages", "priority":4},
    ]

    // let out = [];
    // db.forEach(el =>{
    //     if (el.priority) out.push(el.priority)
    // });
let rez = [];
    let out2 = db.map(el => {
        if(el.priority)  return el.priority
    });

for ( let i = 0; i<out2.length; i++) {
    // if ( out2[i] != out2[i+1]) {
    if(!rez.includes(out2[i])) {
    rez.push(out2[i])
    }
    }
console.log(rez);






