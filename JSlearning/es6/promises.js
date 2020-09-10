var promise = new Promise(function(resolve, reject){
    if(condition=='positive'){
        resolve("I am good");
    }
    else{
        reject("oops")
    }
    
});

