const btn = document.querySelector(`.mainBtn`);
let pressing = false;
btn.addEventListener(`click`, () => {
    if (pressing) {
        btn.style = `background-color: rose`;
        pressing = false;
    } else {
        btn.style = `background-color: blue`;
        pressing = true;
    }
})