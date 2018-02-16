
let turnOnComputer = function(){

    return new Promise((resolve, reject)=>{

        resolve('FIRST ONE FAILED');


    });


};


let openBrowser = function(msg){

    return new Promise((resolve, reject)=>{

        resolve('WHAT????');


    });


};

let goToThisPage = function(msg){

    return new Promise((resolve, reject)=>{

        resolve(msg + " Cannot visit page - ");


    });


};


Promise.all([turnOnComputer(), openBrowser(), goToThisPage()]).then(function(){

    console.log("DONE");

});

