// На входе у вас объект, которые вы придумываете сами.
//  Необходимо все числовые значения удвоить на выходе

let user = {
    a: `1`,
    v: `2`,
}
let findKeyByValues = (keyAndValues) => {
    rez = 0;
    for (let key in keyAndValues) {
        if (!isNaN(keyAndValues[key])) {
            rez += keyAndValues[key] * 2
        }
    }
    return rez
}
console.log(findKeyByValues(user));