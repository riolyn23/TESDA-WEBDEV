let val;

//String Conversion
val = String(72819394); //interger to string
console.log(val);
console.log(typeof val);
val = String(20 + 124);
console.log(val);

val = String(true); //boolean to string
console.log(val);


val = String(new Date())  //Date to string
console.log(val);

val = String([5,1,8,0,3,5]) //array to string
console.log(val);

val = (7385928).toString(); //.toString
console.log(val);

//Number Conversion
val = Number('34') //string to number
console.log(val);

val = Number(false); //boolean to number
console.log(val);
val = Number(true)
console.log(val);

val = Number([2,4,5,634]); //array to number
console.log(val);

val = parseInt('100.23') //parseInt like .toString *round-off decimal
console.log(val);

val = parseFloat('99.9'); //retains decimal number
console.log(val);

const val1 = String(14); // like a + b = ab
const val2 = 44;
const sum = Number(val1 + val2);
console.log(sum);