const fibonacci = function(place) {
    if(place < 1){
        return "OOPS";
    }else if(typeof place === "string"){
        place = parseInt(place);
    }

    if(place === 1 || place === 2){
        return 1;
    }else{
        return fibonacci(place - 1) + fibonacci(place - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
