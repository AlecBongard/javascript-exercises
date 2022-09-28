const sumAll = function(first, second) {
    if(first<0 || second<0 ||
         typeof(first) !== "number" || typeof(second)!== "number"){
        return 'ERROR';
    }



    let low = Math.min(first, second);
    let high = Math.max(first, second);
    let sum = 0;
    for(let i = low; i<=high;i++){
        sum+=i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
