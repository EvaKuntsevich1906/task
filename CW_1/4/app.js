let num = +prompt(`Введите число от 1 до 4`);
if (num <= 1 || num > 4 || (isNaN(num) === false)) {
    switch (num) {
        case 1:
            alert(`зима`)
            break;
        case 2:
            alert(`весна`)
            break;
        case 3:
            alert(`лето`)
            break;
        case 4:
            alert(`осень`)
            break;
        default:
            alert('Некорректный ввод');
    }
}