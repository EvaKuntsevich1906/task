const btn = document.querySelector(`.add`);

let arrayValue = [];
btn.addEventListener(`click`, () => {
    const inp = document.querySelector(`.inp`)
    const res = document.querySelector(`.result`);
    arrayValue.push(inp.value)
    res.innerHTML = arrayValue
})