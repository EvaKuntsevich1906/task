let ValueA = +prompt(`Введите число`);

const sqrtVA = Math.sqrt(ValueA);
Number.isInteger(sqrtVA) ? console.log(sqrtVA) : console.log(sqrtVA.toFixed(2));