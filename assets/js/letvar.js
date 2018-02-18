console.log('let & var');
document.addEventListener('DOMContentLoaded', ()=> {

    const article = document.querySelector('article');

    for (let i = 1; i <= 10; i++) {
        var box = document.createElement('div');
        box.addEventListener('click', function(){
            console.log(`hello ${i}`)
        })
        article.appendChild(box);
    }


/* end */ })
