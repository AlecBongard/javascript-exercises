const findTheOldest = function(arr) {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    let oldest = arr[0];
    let oldAge = 0;

    for(person of arr){
        let pAge=0;
        if('yearOfDeath' in person){
            pAge = person.yearOfDeath - person.yearOfBirth;
        } else{
            pAge = currentYear - person.yearOfBirth;
        }

        if(pAge > oldAge){
            oldest = person;
            oldAge = pAge;
        }

    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
