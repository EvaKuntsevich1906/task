// На вход подается строка в виде электронной почты пользователя. 
// Необходимо прописать регулярное выражение для данной строки. Если же 
// строка подходит под наше регулярное выражение, то вывести булевое true, 
// в противном случае бросить исключение и его обработать.

const mailAdress = `evakuntsevich19@gmail.com`;

let mailCheck = (mail) => {
    try {
        if (mail.includes(`@`)) return true
        else throw new Error(`Указанная строка не является адресом email`)
    } catch (error) {
        return error
    }
}
console.log(mailCheck(mailAdress));


