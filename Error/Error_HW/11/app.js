// На вход подается строка в виде ФИО сотрудника предприятия. 
// Необходимо проверить ввел ли пользователь все данные
// (то есть 3 значения раздеенных пробелом). 
// Также на наличие специальных символов, чисел. Если же
// все верно, то вывести булевое true, в противном случае
// бросить исключение и его обработать. Плешко Анна Юрьевна
// -> true. Плешко 12 -> исключение

const fullNameOfTheEmployee = `Кунцевч Ева Егоровна`;

let validationTtheCorrectnessOfTheEnteredValue = (fullName) => {
    try {
        let splitFullName = fullName.split(` `);
        if (splitFullName == 3) {
            return true
        } else throw new Error(`Введенное ФИО указано некорректно(неполностью)`);
    } catch (e) {
        return e
    }
}
let validationEnteredValuesForSpecialCharactersAndNumbersValues = (fullNameOfTheEmployes) => {
    try {
        let validationOfCorrectness = validationTtheCorrectnessOfTheEnteredValue(fullNameOfTheEmployes);
        let correctnessFullName =  fullNameOfTheEmployes.replaceAll(/[^А-Яа-яЁё ]/g, " ");
        if (validationOfCorrectness === true) {
            return correctnessFullName;
        } else throw new Error (`Введенное ФИО содержит некорректные символы`)
    } catch (e) {
        return e
    }
}
console.log(validationEnteredValuesForSpecialCharactersAndNumbersValues(fullNameOfTheEmployee));