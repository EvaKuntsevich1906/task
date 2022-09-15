// Необходимо отобразить кнопку с надписью 
// «Нажми на меня» и пустой инпут. По клику
//  на кнопку вызвать alert и отобразить сообщение
//   из значения инпутa

const btn = document.querySelector(`.btn`)

btn.addEventListener(`click`, () => {
    const inp = document.querySelector(`.inp`)
    alert(inp.value)
})