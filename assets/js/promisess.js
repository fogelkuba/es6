console.log('promises');

// document.addEventListener('DOMContentLoaded', ()=> {
//
//
//
// /* end */ })


// // sync
//
// fetch("http://google.com").catch( (err)=> {
//     console.log(err)
// })
//
// // hello("hello");
//
// console.log("hey there");
//
//
// // async


let myPromise = new Promise(function(resolve, reject){
    let isComplete = false;

    if (isComplete) {
        resolve("This is complete");
    }else{
        reject("Not completed")
    }
});
