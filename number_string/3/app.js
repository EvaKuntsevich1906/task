let c = prompt("").toLowerCase().trim();
let d = ['a', 'e', `i`, `o`, `u`];
let cd = 0;

for (let i = 0; i < c.length; i++) {
    if (d.includes(c[i])) {
        cd++
    }
}
console.log(cd);