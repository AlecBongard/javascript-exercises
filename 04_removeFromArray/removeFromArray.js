const removeFromArray = function(arr, ) {
    let removals = Array.from(arguments);
    removals.splice(0,1);
    for (elem of removals){
        for(let i = 0;i<arr.length;i++){
            if (arr[i] === elem){
                arr.splice(i, 1);
            }
        }
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
