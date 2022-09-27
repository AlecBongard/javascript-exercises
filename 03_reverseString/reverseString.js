const reverseString = function(string) {
    newstring = '';
    strArray = string.split('');
    while (strArray.length){
        newstring = newstring + strArray.pop();
    }
    return newstring
};

// Do not edit below this line
module.exports = reverseString;
