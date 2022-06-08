// PНапишите функцию, которая возвращает переданную 
// строку с буквами в алфавитном порядке. 'alphabetical' 
// -> 'aaabcehillpt‘

const str = 'alphabetical';

let doRightStr =  (el) => el.split(``).sort().join(``);
console.log(doRightStr(str));