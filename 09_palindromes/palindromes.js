const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z]/g, '');
    let reversed = str.slice(-1);

    for(let i = 2; i <= str.length;i++){
        reversed = reversed + str.slice(-i, -(i - 1))
    }

    if(reversed === str){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
