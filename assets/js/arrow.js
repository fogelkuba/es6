console.log('arrow functions');

document.addEventListener('DOMContentLoaded', ()=> {

const calc = (a = 2, b = 3) => {
    return a + b;
}

console.log(calc());
/* end */ })
