let a = prompt().trim().toLowerCase().replace(/[.*+?^${}()|[\]\\]/g,"");
let b = prompt().trim().toLowerCase().replace(/[.*+?^${}()|[\]\\]/g,"");
let arra = a.split("").sort().join();
let arrb = b.split("").sort().join();

if (arra === arrb) {
    console.log(true);
} else {
    console.log(false);
}