 const palindrom = prompt().trim().toLowerCase();
 (isNaN(palindrom) === true && palindrom === palindrom.split("").reverse("").join("")) ? (console.log(true)) : (console.log(false));