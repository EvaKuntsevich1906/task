const btn = document.querySelector(`.add`)
const res = document.querySelector(`.res`)
let arrayValue = [];

const checkValueOfInput = (el) => {
    if (el.value.length === 0) throw new Error(`Вы не ввели значение`)
    return true
}

btn.addEventListener(`click`, () => {
    try {
        const inp = document.querySelector(`.inp`)
        const callFuncCheck = checkValueOfInput(inp)
        if (callFuncCheck) {
            arrayValue.push(inp.value)
            res.innerHTML = arrayValue
            inp.value = "";
        }
    } catch (err) {
        res.innerHTML = err.message
    }
})