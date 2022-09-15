const btn = document.querySelector(`.btn`);

btn.addEventListener(`mouseover`, () => {
    document.querySelector(`.result-btn`).innerHTML = `Hi`
})
btn.addEventListener(`mouseout`, () => {
    document.querySelector(`.result-btn`).innerHTML = ``
})