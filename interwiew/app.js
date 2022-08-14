const inp = document.querySelector(`.inp`);
const checkValue = (inp) => {
    if (inp.value.length === 0) throw new Error(`Вы не ввели значение`)
    return true
}
const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, () => {
    try {
        const callFuncCheck = (checkValue(inp))
        if (callFuncCheck) {
            if (inp.value === inp.value.split(``).reverse().join(``)) {
                alert(`Это слово является палиндромом`)
            } else throw new Error(`Это слово не является палиндромом`)
        }
    } catch (err) {
        return err.message;
    }

})