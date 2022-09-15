 let user =  {
    name: `John`,
    age: 30, 
    1: 20
 }
 for (let key in user) {
    if (! isNaN(key)) {
       console.log(key);
    }
 }
 console.log(``);