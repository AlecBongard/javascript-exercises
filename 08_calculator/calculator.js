const add = function() {
	let sum = 0;
  for(let i of arguments){
    sum += i;
  }

  return sum;
};

const subtract = function() {
	let difference = arguments[0];
  argArr = Array.from(arguments);
  argArr.splice(0,1);
  for(let i of argArr){
    difference -= i;
  }

  return difference;
};

const sum = function(arr) {
	let added = 0;
  for(let i of arr){
    added+=i;
  }

  return added;
};

const multiply = function(arr) {
  let prod = 1;

  for(let i of arr){
    prod *= i;
  }

  return prod;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	if(num === 0 || num === 1){
    return 1;
  }else{
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
