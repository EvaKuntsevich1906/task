// Задача 32
// Удалите из массива объектов объект с name == "Anna".
// На выходе мы должны получить новый из двух элементов
//  объектов без объекта, в котором ключ name == "Anna"

let arr = [
         { 
             name: `John`,

        }, 
        { 
             name: `Hanna`,

        }, 
         { 
             name: `Loh`,

        }, 
         { 
             name: `Valic`,

        }];

        let objSec = arr.filter(el => el[name] !==`Hanna`);
        console.log(objSec);

