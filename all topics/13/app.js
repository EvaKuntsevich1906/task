// На вход подается объект. Необходимо посчитать 
// количество пар (ключ: значение) где значение число 
// и вывести их количество

let user = {
    a: `1`,
    v: `2`,
}
let findKeyByValues = (keyAndValues) => {
    rez = 0;
    for (let key in user) {
        if (!isNaN(user[key])) {
            if (key) rez += 1

        }
    }
    return rez
}

console.log(findKeyByValues(user));