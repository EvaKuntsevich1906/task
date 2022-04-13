const a = +prompt(`Введите число А`);
const b = +prompt(`Введите число B`);

console.log(`Среднее арифметическое чисел a и b: ${(a+b)/2}`);
console.log(`Среднее геометрическое чисел a и b: ${Math.sqrt(a*b)}`);
console.log(`Среднее гармоническое чисел a и b: ${(2*a*b)/(a+b)}`);
console.log(`Среднее квадратичное чисел a и b: ${Math.sqrt(((a**2)+(b**2))/2)} `);