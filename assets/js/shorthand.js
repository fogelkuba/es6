console.log('shorthand');

document.addEventListener('DOMContentLoaded', ()=> {

let person = {};
person.name = 'john';
person.log = () => {
    console.log(this.name)
};
 person.log();

/* end */ })
