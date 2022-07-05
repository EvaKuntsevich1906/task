const changebutton = document.querySelector(`.changebutton`);
input1 = document.querySelector(`.input1`)
input2 = document.querySelector(`.input2`)

changebutton.addEventListener(`click`, () => {
    let change = input1.value
    input1.value = input2.value;
    input2.value = change;
});