function greet(name){
    console.log("Hadee",+name+"!");
}
function
sayHelloWithDelay(callback){
    setTimeout(function(name){
        callback("Niyaf",+name,2);
    });
}