//Build in Constructor

//String Constructor
const name1 = 'Rio';
const name2 = new String('Rio');

console.log(typeof name2);

if(name2 === name1){
    console.log('Yes');
}else{
    console.log('No');
};


//Number
const number1 = 77;
const number2 = new Number(77);

console.log(typeof number2);


//Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2);


//Function
const getSum1 = function(x, y){
    return x + y;
};

console.log(typeof getSum1(2,3));

const getSum2 = new Function('x', 'y', 'return 1+1');

console.log(typeof getSum2);


//Object 
const nicko1 = {name: 'Rio'};
const nicko2 = new Object({name: 'Rio2'});


//Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(typeof arr2);