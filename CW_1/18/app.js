let x = prompt(`Введите значение`);

while (true) {
    if (isNaN(x) === true) {
        alert(x);
        break;
    } else {
        alert(`Требуется ввести строковое знаечение`)
    }
}