let ValueA = +prompt(`Введите количество сантиметров`);

if ( ValueA>0 && (ValueA >= 100)) {
    console.log(Math.trunc(ValueA/100));
}
 else 
console.log (0);