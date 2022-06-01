const user = {
      name: `Eva`,
      age: 19,
      1: 27
   },
   arr = [];

for (let key in user) {
   !isNaN(user[key]) ?  arr.push(user[key]**2) : null 
}

