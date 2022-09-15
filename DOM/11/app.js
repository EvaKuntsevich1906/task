// Необходимо отобразить инпут числовой и кнопку. 
// После нажатия на кнопку необходимо получить значение 
// из инпута. Проверить, что это число > 0. Если проверка
//  true, то вывести в Результат ряд Фибоначчи

const res = document.querySelector(`.res`)
const btn = document.querySelector(`.btn`);
const checkValueNumber = (numValue) => {
    if (numValue < 0) {
        throw new Error(`Введите значение`)
    }
    return true
}
btn.addEventListener(`click`, () => {
    try {
        const inp = document.querySelector(`.inp`).value;
        if (checkValueNumber(inp)) {
            let fibDefaultValue = [0, 1]
            for (let i = 2; i < inp; i++) {
                fibDefaultValue.push(fibDefaultValue[i - 1] + fibDefaultValue[i - 2])
            }
            res.innerHTML = fibDefaultValue;
        }
    } catch (error) {
        res.innerHTML = error.message;
    }
})
