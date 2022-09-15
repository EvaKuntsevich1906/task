const FirstPeople = +prompt(`Введите скорость`);
const SecondPeople = +prompt(`Введите скорость`);
const way = +prompt(`Введите путь`);

console.log(`Время встречи равно ${way / (FirstPeople + SecondPeople)}`);