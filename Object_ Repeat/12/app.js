// задача 12

let a = prompt()
let b = prompt()
let c = prompt()
let d = prompt()

let user = {
   name: null, 
   age: null, 
   birthday: null, 
   status: null, 
}
 if (isNaN(a) && isNaN(b) && isNaN(c) && isNaN(d)) {
    user.name = a;
    user.age = b;
    user.birthday = c;
    user.status = d;
 }
console.log(user);