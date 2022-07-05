const btn = document.querySelector(`.btn`)

const checkNumber = (inp) => {
    if (inp < 0) throw new Error(`Вы ввели не числовое значение`);
    return true;
}
btn.addEventListener(`click`, () => {
    try {
        const inp = document.querySelector(`.inp`)
        let returnFuncCheck = checkNumber(inp)
        if (returnFuncCheck === true) {
            let res = document.querySelector(`.res`)
            res.innerHTML = document.querySelector(`.inp`).value * 2;
        }
    } catch (error) {
        return error;
    }
})