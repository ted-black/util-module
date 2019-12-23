exports.printMsg = function() {
    console.log("This is a message from the demo package -- now here is a change.");
}

for(let i = 0; i < 10; i++){
    console.log(i + ", is a great number....;^)");
}

exports.printFriendlyMsg = function(){
    console.log("I'm here in sub module, and I'm happy");
}

exports.printNumberList = function (suffix) {
    for(let i = 0; i < 10; i++){
        console.log(i + suffix);
    }
}

