// На вход подается строка в виде пути открытия файла, например, '/home/user/dir/file.txt'. 
// Необходимо вернуть имя файла (подстрока после последнего символа "\" )
// из полного пути к файлу('file.txt').Если же пользователь ввел некорректный путь
//  – исключение.	Путь считается некорректным, если:	1. В нем больше 1 файла не
//   отделены знаком /	2. Конечный файл не содержит расширения

let pecifiedFilePath = 'C:/home/user/dir/file.txt'
let validatePath = (Path) => {
    if (!Path.includes(`/`)) throw new Error(`Неверный путь`)
    if (/^[a-zA-Z0-9\/:_ \-]+\.[a-z]+$/g.test(Path)) return true;
    else throw new Error(`Путь не содержит файла`)
}
let findFilePath = (givenPath) => {
    try {
        let filePathSplit = givenPath.split(`/`)
        if (validatePath(givenPath)) {
            return filePathSplit[filePathSplit.length - 1]
        }
    } catch (error) {
        return error
    }
}

console.log(findFilePath(pecifiedFilePath));