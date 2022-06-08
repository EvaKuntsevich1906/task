//Задача 5. Напишите функцию vowel_count(str), которая
//  принимает строку в качестве параметра и подсчитывает 
//  количество гласных в строке

let input = `Loremipsum`.toLowerCase().split(``);
let vowel_count = (set) => {
    let vowels = [`e`, `u`, `o`, `a`,`i`]
    let count = 0;

    set.forEach(el => vowels.includes(el) ? count +=1 : null);
    return count
} 
console.log(vowel_count(input));
