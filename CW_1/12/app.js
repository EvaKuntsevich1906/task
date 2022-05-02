let a = +prompt(`Чтобы узнать принадлежность к возрастной группе, введите возраст`);

if (0 < a && a <= 13) {
    console.log(`Детство`);
} else if (14 < a && a <= 24) {
    console.log(`Молодость`);
} else if (25 < a && a <= 59) {
    console.log(`Зрелость`);
} else if (60 < a) {
    console.log(`Cтарость`);
}