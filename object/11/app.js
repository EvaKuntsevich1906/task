
let user = {
   a: `1`,
   v: `2`,
}
rez = 0;

for ( let key in user){ 
   if( ! isNaN(user[key])) {
      if(key) rez +=1

   }
}
console.log( rez);
