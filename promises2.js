let turnOnComputer = function(){

    return new Promise((resolve, reject)=>{

        reject('Computer is ON -');


    });


};


let openBrowser = function(msg){

    return new Promise((resolve, reject)=>{

        resolve(msg + ' Browser is open ');


    });


};

let goToThisPage = function(msg){

    return new Promise((resolve, reject)=>{

        resolve(" Go to edwindiaz.com");


    });


};

turnOnComputer().then((result)=>{

    return openBrowser(result);


}).then((result)=>{

    return goToThisPage(result);

}).then((result)=>{

    console.log("WE ARE DONE ");

});