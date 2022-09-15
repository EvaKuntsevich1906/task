// На входе есть пароль, который пользователь вводит с клавиатуры.
// Требования:	1. Пароль должен содержать не менее 8 символов
// В блоке try/catch при обработке пароля необходимо бросить исключение, 
// если в пароле меньше 8 символов. 	Если пароль корректный, то вывести *,
//  где одна *- один символ. Пример: 12345678 -> *******. Pass -> исключение

const userPassword =  prompt(``);
let  validationPasswordCheck = (password) => {
    try {
        if (password.length >= 8) return `*`.repeat(password.length)
        else throw new Error(`Ввведенный пароль содержит недостаточное количество символов`)
    } catch (err) {
        return err;
    }
    }
console.log(validationPasswordCheck(userPassword));