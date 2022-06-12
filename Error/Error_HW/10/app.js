// На вход подается строка в виде url. Необходимо прописать 
// регулярное выражение для данной строки. Если же строка подходит
//  под наше регулярное выражение, то вывести булевое true, 
//  в противном случае бросить исключение и его обработать.

const urlAdressValue = `https://onliner.by`;

let checkrRegularExpressionOfUrl = (url) => {
    try {
        if (/^(https|http):\/\/[a-zA-Z]+\.[a-zA-Z]+$/g.test(url)) {
            return true;
        } else throw new Error `Введенное значение не является URL-адресом`
    } catch (e) {
        return e
    }
}
console.log(checkrRegularExpressionOfUrl(urlAdressValue));