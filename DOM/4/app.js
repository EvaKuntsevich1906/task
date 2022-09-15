const btn = document.querySelector(`.btn`);
const result = document.querySelector(`.result`);

const stringCheck = (value) => {
    if (value.length === 0) throw new Error(`НИЧЕГО НЕ ВВЕЛИ`);
    if ((!/^[a-zA-Zа-яА-Я]+$/g.test(value))) throw new Error(`ЧТО-ТО ПОШЛО НЕ ТАК`);
    return true
}

btn.addEventListener(`click`, () => {
    try {
        const input = document.querySelector(`.input`).value.toLowerCase().trim();
        const check = stringCheck(input);
        if (check) {
            if (input.split(``).reverse(``).join(``) === input) throw new Error(`Это палиндром`)
            result.innerHTML = `Это не палиндром`
        }
    } catch (err) {
        result.innerHTML = err.message;
    }
})