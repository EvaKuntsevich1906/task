const open = document.querySelector(`.open`);
const closed = document.querySelector(`.closed`)

closed.addEventListener(`click`, () => {
    document.querySelector(`.inp`).setAttribute(`readonly`, `readonly`)
})
open.addEventListener(`click`, () => {
   document.querySelector(`.inp`).removeAttribute(`readonly`, `readonly`)
})