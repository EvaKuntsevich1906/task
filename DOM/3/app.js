const img = document.querySelector(`.img`);

img.addEventListener(`click`, () => {
    img.style = `background-image: url(./code.jpg);
    background-size: cover;
    width: 200px;
    height: 200px`;
});


// .img {
//     background-image: url(./cat.jpg);
//     background-size: cover;
//     width: 200px;
//     height: 200px;
// }