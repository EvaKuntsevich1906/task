// Задача 19. Напишите функцию, которая будет принимать массив 
// сохраненных чисел и находить минимальное и максимальное числа соответственно.

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let findMinAndMaxValue = (maxMin) => {
    let minval = maxMin[0]
    let maxval = maxMin[0]
    maxMin.forEach(el => {
    (el > maxval) ? (maxval = el) : null; 
    (el < minval) ? (minval = el) : null; 
    });
    return [minval,maxval]
}
findMinAndMaxValue(arr);
console.log(findMinAndMaxValue(arr));