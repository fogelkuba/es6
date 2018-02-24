console.log('class');

document.addEventListener('DOMContentLoaded', ()=> {

    class Person {
        constructor(name, title){
            this.name = name;
            this.title = title;
        }

        displayData(){
            console.log(`${this.name} is a great ${this.title}`)
        }

    }

    let john = new Person('John', 'Dentist');
    john.displayData();

/* end */ })
