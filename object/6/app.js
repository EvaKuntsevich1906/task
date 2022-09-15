 const user = {
    name: `Eva`,
    age: 19,
    1: 27,
 }
 for (let key in user){ 
    if ( ! isNaN(user[key])) console.log(user[key]**2);
 }

 console.log(`h`);
