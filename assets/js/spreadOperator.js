console.log('spread operator');

document.addEventListener('DOMContentLoaded', ()=> {

var adults = ['John', 'Peter', 'Maria'];
var kids = ['Johnnie', 'Pablito', 'Mary'];
console.log(kids);
console.log(...kids);
var people = ['Juan', 'Williams', ...kids, ...adults];
console.log(people);
console.log(...people);

var send = function(username, email, pass){ console.log("DATA SENT", username, email, pass) };
let fromBackend = ['Rico', 'rico@rico.com', 12456];
send(...fromBackend)

var cars = [
    {brand: 'honda', doors: 4},
    {brand: 'bmw', doors: 2},
];
var newCars = [
    {brand: 'audi', doors: 3},
    {brand: 'mercedes', doors: 4},
];
cars.push(...newCars);
console.log(cars)

/* end */ })
