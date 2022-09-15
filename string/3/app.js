const date = prompt("xxxx-xx-xx");
const datearr = date.split("-");
const datearrrev = datearr.reverse().join("/");
console.log(datearrrev.replaceAll("-", "/"));