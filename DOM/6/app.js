const btn = document.querySelector(`.btn`)
const res = document.querySelector(`.result`);

const checkValueOfInp = (inp1, inp2) => {
    if (inp1.length === 0 || inp2.length === 0) throw new Error(`Введите значение`)
    if (!/^[a-zA-Zа-яА-Я ]+$/g.test(inp1) || !/^[a-zA-Zа-яА-Я ]+$/g.test(inp2)) throw new Error(`Вы ввели не текстовое значение`);
    return true;
}
btn.addEventListener(`click`, () => {
    try {
        const input1 = document.querySelector(`.input1`).value.toLowerCase().trim();
        const input2 = document.querySelector(`.input2`).value.toLowerCase().trim();
        const callCheckFunc = checkValueOfInp(input1, input2);
        if (callCheckFunc) {
            if (input1.split(``).sort().join(``) === input2.split(``).sort().join(``)) {
                res.innerHTML = `Это анограмма`
            } else throw new Error(`Это не анограмма`)
        }
    } catch (err) {
        res.innerHTML = err.message;
    }
})