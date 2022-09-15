// Необходимо отобразить кнопку с
// надписью «Нажми на меня» и пустой инпут.
// По клику на кнопку вызвать alert и отобразить 
// сообщение из значения инпута. Проверки на ввод. 
// Обработать ошибки


const btn = document.querySelector(`.btn`)
const checkValue = (el) => {
    if (el.length > 0) {
        return true
    } else throw new Error(`Введите значение `)
}
btn.addEventListener(`click`, () => {
    try {
        const inp = document.querySelector(`.inp`).value.trim();
        const bool = checkValue(inp)
        alert(bool)
    } catch (error) {
        alert(error.message)
    }
})