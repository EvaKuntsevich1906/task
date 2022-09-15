// На вход подается строка в виде электронной почты пользователя. 
// Необходимо прописать регулярное выражение для данной строки. 
// Если же строка подходит под наше регулярное выражение, 
// то вывести булевое true, в противном случае бросить исключение и его обработать

const mailAdress = `evakuntsevich19@gmail.com`;

let checkrRegularExpression = (mail) => {
    try {
        if (/^[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]+$/g.test(mail)) {
            return true;
        } else throw new Error `Данный адрес электронной почты не содержит символ @`
    } catch (e) {
        return e
    }
}
console.log(checkrRegularExpression(mailAdress));