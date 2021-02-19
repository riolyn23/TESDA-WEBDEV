onst firstName = 'Rio';
const lastName = 'Lyn';
const age = 20;
const str = 'Im Rio Lyn';
const tags = 'Web development, Web Design, Programming';

let val;

val = firstName + lastName; //concatenation *no space
console.log(val);

val = firstName + ' ' + lastName;  //with space using ' '
console.log(val);

val = 'Rio'; //append
val += 'Lyn';
console.log(val);

val = 'Hi im ' + firstName + ' and I am ' + age + ' years old.';
console.log(val);

val = "I can't wait" //escaping using double quotes to use a single quote
console.log(val);

val = firstName.length; //string length
console.log(val);

val = firstName.concat(' ', lastName); //concat()
console.log(val);

val = firstName.toUpperCase(); //CAPSLOCKKKKKKK uppercase
console.log(val);

val = firstName.toLowerCase(); //lowercase
console.log(val);

val = firstName[3]; //index
console.log(val);

val = lastName.indexOf('n'); //indexof
console.log(val);

val = firstName.lastIndexOf('k');
console.log(val);

val = firstName.charAt('3'); //charAt()
console.log(val);

val = firstName.substring(0 , 4); //substring from start to end *end not included
console.log(val);

val = firstName.slice(0 , 3); //slice()
console.log(val);

val = firstName.slice(-2);
console.log(val);

val = str.split(' ');  //split()
console.log(val);

val = str.split(',');
console.log(val);

val = str.replace('Rio', 'Vice Ganda'); //replace()
console.log(val);

val = str.includes('test'); //includes() *returns as boolean
console.log(val);

val = str.includes('Lyn');
console.log(val);