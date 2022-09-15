const btn = document.querySelector(`.add`);
const checkValue = (el) => {
    if (el.value.length === 0) throw new Error('hjk,')
    return true
}

let arrayValue = [];
const res = document.querySelector(`.res`);

btn.addEventListener(`click`, () => {
    try {
        const inp = document.querySelector(`.inp`)
        let checkFuncCall = checkValue(inp)
        if (checkFuncCall) {
            arrayValue.push(inp.value)
            res.innerHTML = arrayValue
           c
        }
    } catch (error) {

        res.innerHTML = error.message;
    }


})